import React from 'React';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Header } from './index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Header />', () => {
  it('render Header component', () => {
    const wrapper = mount(<Header />);
    expect(wrapper).toHaveLength(1);
  });
});
