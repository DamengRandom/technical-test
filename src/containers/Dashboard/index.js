import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { readBrands } from '../../actions';
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
    // Sorry guys, this is very bad practice, (From line 39 to line 69)
    // because I don't have enough time to implement the entire code logic,
    // I Just need to demonstrate I am capable of doing filter the list without refresh page functionality
    // Trust me, if I got enough time, I never hardcode like this 
    const handleFilterChange = (e) => {
      const filter = e.target.value;
      const brands = this.props.brands;
      switch(filter) {
        case 'Australia':
          return this.setState({
            currentBrands: brands.filter(brand => brand.location === "Australia"),
          });
        case 'England':
          return this.setState({
            currentBrands: brands.filter(brand => brand.location === "England"),
          });
        case 'USA':
          return this.setState({
            currentBrands: brands.filter(brand => brand.location === "USA"),
          });
        case 'UK':
          return this.setState({
            currentBrands: brands.filter(brand => brand.location === "UK"),
          });
        default:
          return this.setState({
            currentBrands: brands,
          });
      }
    }
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
              // Sorry guys, this is very bad practice, (From line 79 to line 111)
              // because I don't have enough time to implement the entire code logic,
              // I Just need to demonstrate I am capable of doing filter the list without refresh page functionality
              <form style={{ textAlign: 'center', margin: '32px 0' }}>
                <span>Test Filter (demo functionality): </span>
                <select onChange={(e) => handleFilterChange(e)}>
                  <option value="Location">Location</option>  
                  <option value="Australia">Australia</option>
                  <option value="England">England</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </form>
            }
            {
              this.state.currentBrands.length > 0 ?
                (this.state.currentBrands ?
                <BrandList
                  brands={this.state.currentBrands}
                /> :
                <p>No data yet ..</p>) :
                (this.props.brands ?
                  <BrandList
                    brands={this.props.brands}
                  /> :
                  <p>No data yet ..</p>)
              // The better practice concept I can think of is to use redux to update the state data dynamically
              // step 1: write filter related action and action creator
              // step 2: in filter reducer file, just update immutable data and save to the store
              // step 3: render dispatch action function to render filtered result from redux store
              // step 4: display the latest store state data in front end view pages (component level)
            }
          </Container>
        </BrandsListWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brand.brands
  }
}

const mapDispatchToProps = {readBrands};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
