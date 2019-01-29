import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../test/TestUtils";
import { RulesTab } from "./RulesTab";

const setup = (initialState = {}) => {
  const wrapper = shallow(<RulesTab {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      rules: { Preppo: ["1", "2"] },
      gameBuilder: { gameName: "Preppo" },
      handleSubmit: function() {
        return true;
      }
    };
    wrapper = setup(initialState);
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-rules-tab");
    expect(component.length).toBe(1);
  });
});
