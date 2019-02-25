import React from 'React';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Dashboard from './index';
import BrandList from '../BrandList/index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const storeFake = state => ({
  default: () => {
  },
  subscribe: () => {
  },
  dispatch: () => {
  },
  getState: () => ({ ...state })
});

const store = storeFake({
  brand: {
    brands: [
      {
        "company_id": 2,
        "company_name": "DropCar",
        "image_url": "https://d21pqaamub0upm.cloudfront.net/dptycms/wp-content/uploads/2018/12/DropCar_LOGO1.png",
        "excerpt": "DropCar saw a 57% decrease in the number of no-shows amongst their drivers after using Deputy.",
        "industry": "Services",
        "location": "Australia",
        "company_size": "50-100",
        "use_case": [
            "Employee Scheduling",
            "Auto-Scheduling",
            "Time & Attendance"
        ],
        "word_count": 633
      },
      {
        "company_id": 4,
        "company_name": "The London Animal Hospital",
        "image_url": "https://d21pqaamub0upm.cloudfront.net/dptycms/wp-content/uploads/2018/11/The-London-Animal-Hospital_LOGO.png",
        "excerpt": "Deputy makes staff scheduling simpler for The London Animal Hospital.",
        "industry": "Healthcare",
        "location": "England",
        "company_size": "10-30",
        "use_case": [
            "Employee Scheduling",
            "Time & Attendance"
        ],
        "word_count": 270
      }
    ]
  }
});

describe('<Dashboard />', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Dashboard />
    </Provider>);

  it('render Dashboard component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render BrandList compoennt data', () => {
    expect(wrapper
      .find(BrandList)
      .props()
      .brands
      .length)
      .toEqual(2);
    expect(wrapper
      .find(BrandList)
      .props()
      .brands[0]
      .location)
      .toEqual("Australia");
  });

  it("should render handleFilterChange function", () => {
    wrapper.find('#selectFilter')
      .simulate('change', { target: { value: 'England' }});
    wrapper.update();
    expect(wrapper.find(BrandList).props().brands.length)
      .toEqual(1);
  }); 
});
