import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { readBrands, filteredByLocation } from '../../actions';
import { Header } from '../../components/Header';
import BrandList from '../BrandList/index';
import FilterOptions from '../FilterOptions/index';

const title = `You're in good company`;
const PageTitle = styled.div`
  text-align: center;
  margin: 80px 0 40px;
`;
const BrandsListWrapper = styled.section`
  .container-fluid {
    padding: 16px;
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    .container-fluid {
      width: 100%;
    }
  }
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBrands: []
    }  
  }

  componentDidMount() {
    this.props.readBrands();
  }

  render() {
    return (
      <div style={{ backgroundColor: "#f2f4f5" }}>
        <Header />
        <BrandsListWrapper id="brandWrapper">
          <PageTitle>
            <h3>{ title }</h3>
          </PageTitle>
          <Container fluid="true">
            <FilterOptions />
            {
              <form style={{ textAlign: 'center', margin: '32px 0' }}>
                <span>Test Filter (demo functionality): </span>
                <select id="selectFilter" onChange={(e) => {
                  this.props.filteredByLocation(this.props.brands, e.target.value);
                }}>
                  <option value="Location">Location</option>  
                  <option value="Australia">Australia</option>
                  <option value="England">England</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </form>
            }
            {
               this.props.filtered &&  this.props.filtered.length > 0 ?
                (this.props.filtered ?
                  <BrandList
                    brands={this.props.filtered}
                  /> :
                  <p>No data yet ..</p>) :
                (this.props.brands ?
                  <BrandList
                    brands={this.props.brands}
                  /> :
                  <p>No data yet ..</p>)
            }
            <span style={{ margin: '100px' }}>hahahahha</span>
          </Container>
        </BrandsListWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brand.brands,
    filtered: state.filtered.filtered
  }
}

const mapDispatchToProps = {
  readBrands,
  filteredByLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
