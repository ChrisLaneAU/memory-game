import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../test/TestUtils";
import { DisplayPanel } from "./DisplayPanel";

const setup = (initialState = {}) => {
  const wrapper = shallow(<DisplayPanel {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      gameBuilder: { numOfPairs: 2, displayCardsToFront: [1] }
    };
    wrapper = setup(initialState);
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-display-panel");
    expect(component.length).toBe(1);
  });
});
