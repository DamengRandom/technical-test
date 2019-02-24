import React from 'react';
import styled from 'styled-components';
import FilterDropdownItem from './FilterDropdownItem';

const FilterDropdownWrapper = styled.div`
  .dropdown-toggle {
    font-size: 14px;
    min-width: 160px;
    text-align: right;
    background-color: #fff;
    border: 1px solid #ddd;
    outline: none;
    &>span {
      float: left;
    }
  }
  .dropdown:focus {
    outline: none;
    button:focus {
      outline: none;
    }
  }
  .dropdown-menu.show {
    display: block;
    min-width: 14em;
    button {
      font-size: 12px;
    }
    &>div.m-3:first-child {
      display: flex;
      align-items: baseline;
    }
    &>div.m-3 {
      display: flex;
      justify-content: flex-start;
      &>p {
        flex-grow: 1;
        font-size: 12px;
      }
      .clear-button: {
        color: #249de8;
        text-decoration: underline;
      }
    }
  }
`;

class FilterDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOpen: false,
      toggledOption: false,
      currentCounter: 0,
    };
  }

  toggleSwitch = () =>
    this.setState({
      toggleOpen: !this.state.toggleOpen
    });

  toggleOption = () =>
    this.setState({
      toggledOption: !this.state.toggledOption
    });

  updateSelectCounter = (isSelected) => {
      if(isSelected() === true) {
        return this.setState({
          currentCounter: this.state.currentCounter + 1
        });
      }else if(isSelected() === false) {
        return this.setState({
          currentCounter: this.state.currentCounter - 1
        });
      }
  }

  resetToUnselect = () =>
    this.setState({
      toggledOption: false,
      currentCounter: 0,
    });

  render() {
    const dropdownClasses =
      `dropdown-menu ${this.state.toggleOpen ?
        "show" : ""}`;

    return (
      <FilterDropdownWrapper>
        <div className="dropdown m-1">
          <button className="btn dropdown-toggle"
            type="button"
            onClick={this.toggleSwitch}>
            <span>
              { this.props.buttonText || 'Dropdown' }
            </span>
          </button>
          <div className={dropdownClasses}
            aria-labelledby="dropdownMenuButton">
            <div className="m-3">
              <p onClick={this.triggerToggleOption}>
                { this.state.currentCounter } Selected
              </p>
              <button className="btn clear-button"
                type="button"
                onClick={this.resetToUnselect}>
                Clear
              </button>
            </div>
            {
              this.props.options.map((option, index) =>
                <FilterDropdownItem
                  key={`${option.name}-${index}`}
                  option={option}
                  optionId={`${option.name}-${index}`}
                  updateSelectCounter={this.updateSelectCounter}
                />
              )
            }
          </div>
        </div>
      </FilterDropdownWrapper>
    );
  }
}

export default FilterDropdown;
