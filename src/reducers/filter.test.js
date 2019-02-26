import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { FILTER_BY_LOCATION } from '../constants';
import { filterReducer } from './filter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("test filters reducer", () => {
  const state = filterReducer(undefined, {type: '@@INIT'});
  const mockState = {
    ...state,
    filtered: []
  };
  expect(mockState).toEqual({"filtered": []});

  it("should filter brands by location", () => {
    const action = {
      type: FILTER_BY_LOCATION, 
      payload: [],
    };
    const newMockState = filterReducer(mockState, action);
    expect(newMockState).toEqual({"filtered": []});
  });
});
