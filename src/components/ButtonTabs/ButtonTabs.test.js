import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../test/testUtils";
import { ButtonTabs } from "./ButtonTabs";

const setup = (initialState = {}) => {
  const wrapper = shallow(<ButtonTabs {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-button-tabs");
    expect(component.length).toBe(1);
  });
});
