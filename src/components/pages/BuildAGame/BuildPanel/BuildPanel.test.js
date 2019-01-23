import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/TestUtils";
import { BuildPanel } from "./BuildPanel";

const setup = (initialState = {}) => {
  const wrapper = shallow(<BuildPanel {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-build-panel");
    expect(component.length).toBe(1);
  });
});
