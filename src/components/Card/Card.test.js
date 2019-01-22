import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../test/testUtils";
import Card from "./Card";

const setup = (initialState = {}) => {
  const wrapper = shallow(<Card {...initialState} />);
  //console.log(wrapper.debug());
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-card");
    expect(component.length).toBe(1);
  });
});

describe("animation", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { rotate: "infinitely" };
    wrapper = setup(initialState);
  });
  it("front of card spins infinitely", () => {
    const component = findByTestAttr(wrapper, "component-card-front");
    expect(component.get(0).props.className).toContain(
      "card__side--front--rotate-infinitely"
    );
  });
  it("back of card spins infinitely", () => {
    const component = findByTestAttr(wrapper, "component-card-back");
    expect(component.get(0).props.className).toContain(
      "card__side--back--rotate-infinitely"
    );
  });
});
