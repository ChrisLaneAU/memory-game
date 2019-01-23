import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../test/TestUtils";
import { SampleTab } from "./SampleTab";

const setup = (initialState = {}) => {
  const wrapper = shallow(<SampleTab {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      handleSubmit: function() {
        return true;
      }
    };
    wrapper = setup(initialState);
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-sample-tab");
    expect(component.length).toBe(1);
  });
});
