import React from 'react';
// import styled from 'styled-components';
import SingleBrand from './SingleBrand/index';

class BrandList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row m-1">
          {
            this.props.brands.map(brand =>
              <SingleBrand key={brand.company_id} brand={brand} />)
          }
        </div>
      </div>
    )
  }
}

export default BrandList;
