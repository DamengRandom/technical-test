import React from 'react';
import { Button } from '../../../../components/Button';
import './index.css';

class FilterDropdownItem extends React.Component {
  state = {
    toggleOption: false
  };

  render() {
    const { option, updateSelectCounter } = this.props;
    const buttonText = `${option.name} (${option.count})`;
    const triggerToggleOption = () => {
      this.setState({
        toggleOption: !this.state.toggleOption
      });
    }
    const isSelected = () => {
      return this.state.toggleOption === true ? false : true;
    };

    return (
      <div className="m-3"
        onClick={() => updateSelectCounter(isSelected)}>
        <Button
          id={option.optionId}
          type="button"
          classNames={
            this.state.toggleOption ? 
              "btn toggled" :
              "btn untoggled"}
          onClick={triggerToggleOption}
          text={buttonText} />
      </div>
    );
  }
}

export default FilterDropdownItem;
