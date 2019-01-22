import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../test/testUtils";
import GameSelect from "./GameSelect";

const setup = (initialState = {}) => {
  const wrapper = shallow(<GameSelect {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-game-select");
    expect(component.length).toBe(1);
  });
});
