import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../test/testUtils";
import Header from "./Header";

const setup = (initialState = {}) => {
  const wrapper = shallow(<Header {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-header");
    expect(component.length).toBe(1);
  });
});
