import React from 'React';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import Dashboard from './index';
import BrandList from '../BrandList/index';
// import { readBrands, filteredByLocation } from '../../actions';

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
    ],
  },
  filtered: {
    filtered: []
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

  it("should render filteredByLocation function", () => {
    const mockStore = storeFake({
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
        ],
      },
      filtered: {
        filtered: [
          {
            "company_id": 6,
            "company_name": "Chat Time",
            "image_url": "https://d21pqaamub0upm.cloudfront.net/dptycms/wp-content/uploads/2018/10/logo-chatime.png",
            "excerpt": "Chatime uses Deputy to save 204 hours of admin every week ($1million+/year) across its network",
            "industry": "Service",
            "location": "USA",
            "company_size": "100+",
            "use_case": [
                "Employee Scheduling",
                "Time & Attendance",
                "Employee Tasking",
                "Workplace Communiation",
                "Performance Management"
            ],
            "word_count": 820
          }
        ]
      }
    });
    const newMockWrapper = mount(
      <Provider store={mockStore}>
        <Dashboard />
      </Provider>);
    // const filteredByLocation = jest.fn();
    // const { brands } = newMockWrapper.find(BrandList).props();
    // newMockWrapper.find('#selectFilter')
    //   .simulate('change', filteredByLocation(brands, { target: { value: 'England' }}));
    // newMockWrapper.update();
    // currently not used, but will use later
    expect(newMockWrapper.find(BrandList).props().brands.length)
      .toEqual(1);
  }); 
});
