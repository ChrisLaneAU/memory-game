import React from "react";
import { Provider } from "react-redux";
import { shallow, mount } from "enzyme";

import { findByTestAttr } from "./test/testUtils";
import { App } from "./App";

const setup = (initialState = {}) => {
  const wrapper = shallow(<App {...initialState} />);
  //console.log(wrapper.debug());
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { loadingVisible: false };
    wrapper = setup(initialState);
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-app");
    expect(component.length).toBe(1);
  });
});

/*const setup = (state = {}) => {
  const wrapper = shallow(
    <Provider store={store}>
      <unconnectedApp />
    </Provider>
  );
  //console.log(wrapper.debug());
  return wrapper;
};

describe("redux properties", () => {
  it("has access to 'success' state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    //expect(successProp).toBe(success);
  });
  it("has access to 'secretWord' state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    //expect(secretWordProp).toBe(secretWord);
  });
  it("has access to 'guessedWords' state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    //expect(guessedWordsProp).toEqual(guessedWords);
  });
  it("getSecretWord action creator is a function on the props", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    //expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

it("getSecretWord runs on App mount", () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: []
  };

  // set up app component with getSecretWordMock as the getSecreteWord prop

  const wrapper = shallow(<UnconnectedApp {...props} />);

  // run lifecycle method
  wrapper.instance().componentDidMount();

  // check to see if mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});*/
