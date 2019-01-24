import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../test/testUtils";
import Btn from "./Btn";

const setup = (initialState = {}) => {
  const wrapper = shallow(<Btn {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-btn");
    expect(component.length).toBe(1);
  });
});
