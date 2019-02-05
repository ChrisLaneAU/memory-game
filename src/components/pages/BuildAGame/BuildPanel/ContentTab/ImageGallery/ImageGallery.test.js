import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../../../../test/testUtils";
import { ImageGallery } from "./ImageGallery";

const setup = (initialState = {}) => {
  const wrapper = shallow(<ImageGallery {...initialState} />);
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      gameBuilder: { images: [{ img: "", style: "center" }] }
    };
    wrapper = setup(initialState);
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-image-gallery");
    expect(component.length).toBe(1);
  });
});
