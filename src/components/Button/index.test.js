import React from 'React';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Button } from './index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Button />', () => {
  it('render Button component', () => {
    const mockProps = {
      type: 'button',
      classNames: 'test-class',
      onClick: jest.fn(),
      text: 'test'
    }
    const wrapper = mount(<Button {...mockProps} />);
    expect(wrapper).toHaveLength(1);
  });
});
