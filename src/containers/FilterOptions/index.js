import React from 'react';
import styled from 'styled-components';
import FilterDropdown from './FilterDropdown';

const FilterOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 40px;
  .page-title {
    font-size: 14px;
  }
  @media only screen and (max-width: 900px) {
    display: block;
    text-align: center;
  }
`;

const options = [
  { name: 'Employee Scheduling', count: 10 },
  { name: 'Auto-Scheduling', count: 3 },
  { name: 'Time & Attendance', count: 5 },
  { name: 'Employee Tasking', count: 1 },
  { name: 'Workplace Communication', count: 10 },
  { name: 'Performance Management', count: 10 },
]; // fake options (will get data in real time)

class FilterOptions extends React.Component {
  render() {
    const text = `Filter By`;
    return (
      <FilterOptionsWrapper className="container">
        <p className="page-title m-1">{ text }</p>
        <FilterDropdown buttonText="Industries"
          options={options} />
        <FilterDropdown buttonText="Location"
          options={options} />
        <FilterDropdown buttonText="Company Size"
          options={options} />
        <FilterDropdown buttonText="Use Case"
          options={options} />
      </FilterOptionsWrapper>
    );
  }
}

export default FilterOptions;
