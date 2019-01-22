import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../test/testUtils";
import LoadingOverlay from "./LoadingOverlay";

const setup = (initialState = {}) => {
  const wrapper = shallow(<LoadingOverlay {...initialState} />);
  //console.log(wrapper.debug());
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-loading-overlay");
    expect(component.length).toBe(1);
  });
});
