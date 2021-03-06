import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import { GameSetup } from "./GameSetup";

const setup = (initialState = {}) => {
  const wrapper = shallow(<GameSetup {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-game-setup");
    expect(component.length).toBe(1);
  });
});
