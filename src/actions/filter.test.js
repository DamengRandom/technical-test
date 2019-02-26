import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { FILTER_BY_LOCATION } from '../constants';
import { filteredByLocation, filterByLocationAction } from '../actions/filter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("filter action test", () => {
  it("should filter brands by location", () => {
    const mockBrands = [];
    const mockFilter = 'Australia';
    const action = filteredByLocation(mockBrands, mockFilter);
    filterByLocationAction({
      type: FILTER_BY_LOCATION,
      payload: action
    });
  });
});
