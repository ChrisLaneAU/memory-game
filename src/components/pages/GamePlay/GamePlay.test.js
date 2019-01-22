import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import { GamePlay } from "./GamePlay";

const setup = (initialState = {}) => {
  const wrapper = shallow(<GamePlay {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-game-play");
    expect(component.length).toBe(1);
  });
});
