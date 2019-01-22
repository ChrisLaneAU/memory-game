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
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-game-select");
    expect(component.length).toBe(1);
  });
  it("renders three cards without error", () => {
    const card = findByTestAttr(wrapper, "component-card");
    expect(card.length).toBe(3);
  });
  describe("render cards", () => {
    it("build-a-game card renders with build-a-game link", () => {
      const cardLink = findByTestAttr(wrapper, "link-to-build-a-game");
      expect(cardLink.length).toBe(1);
    });
    it("try-example card renders with game-setup link", () => {
      const cardLink = findByTestAttr(wrapper, "link-to-game-setup");
      expect(cardLink.length).toBe(1);
    });
    it("quick-start card renders with game-play link", () => {
      const cardLink = findByTestAttr(wrapper, "link-to-game-play");
      expect(cardLink.length).toBe(1);
    });
  });
  describe("render card content", () => {
    it("each card renders with an icon", () => {
      const cardIcon = findByTestAttr(wrapper, "component-icon");
      expect(cardIcon.length).toBe(3);
    });
    it("each card renders with a title", () => {
      const cardTitle = findByTestAttr(wrapper, "title");
      expect(cardTitle.length).toBe(3);
    });
    it("each card renders with a description", () => {
      const cardDescription = findByTestAttr(wrapper, "description");
      expect(cardDescription.length).toBe(3);
    });
  });
});
