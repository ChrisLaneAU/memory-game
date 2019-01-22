import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import BuildAGame from "./BuildAGame";

const setup = (initialState = {}) => {
  const wrapper = shallow(<BuildAGame {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-build-a-game");
    expect(component.length).toBe(1);
  });
});
