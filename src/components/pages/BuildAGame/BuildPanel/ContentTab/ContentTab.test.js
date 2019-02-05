import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../test/TestUtils";
import { ContentTab } from "./ContentTab";

const setup = (initialState = {}) => {
  const wrapper = shallow(<ContentTab {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      handleSubmit: function() {
        return true;
      },
      gameBuilder: {
        gameName: "Untitled Game",
        images: { img: "", style: "center" }
      }
    };
    wrapper = setup(initialState);
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-content-tab");
    expect(component.length).toBe(1);
  });
});
