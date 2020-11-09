import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../test/testUtils";
import App from "./App";

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const store = storeFactory({ success: false });
    const wrapper = shallow(<App store={store} />).dive();
    expect(wrapper.props().success).toBe(false);
  });
  test("has access to secretWord state", () => {
    const store = storeFactory({ secretWord: "party" });
    const wrapper = shallow(<App store={store} />).dive();
    expect(wrapper.props().secretWord).toBe("party");
  });
  test("hass access to `guessedWords` state", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const store = storeFactory({ guessedWords });
    const wrapper = shallow(<App store={store} />).dive();
    expect(wrapper.props().guessedWords).toBe(guessedWords);
  });
  test("`getSecretWord` action creator is a function prop", () => {
    const store = storeFactory();
    const wrapper = shallow(<App store={store} />).dive();
    expect(wrapper.props().getSecretWord).toBeInstanceOf(Function);
  });
});
