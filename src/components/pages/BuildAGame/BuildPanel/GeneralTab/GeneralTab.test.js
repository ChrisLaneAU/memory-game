import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../test/TestUtils";
import { GeneralTab } from "./GeneralTab";

const setup = (initialState = {}) => {
  const wrapper = shallow(<GeneralTab {...initialState} />);
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
    const component = findByTestAttr(wrapper, "component-general-tab");
    expect(component.length).toBe(1);
  });
});
