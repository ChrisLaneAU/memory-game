import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import { GameFinish } from "./GameFinish";

const setup = (initialState = {}) => {
  const wrapper = shallow(<GameFinish {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-game-finish");
    expect(component.length).toBe(1);
  });
});
