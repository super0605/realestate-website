import React from "react";
import { shallow } from "enzyme";
import AppContainer from "../app.js";

describe("App", () => {
  const wrapper = () => {
    return shallow(<AppContainer />);
  };

  test("Renders without crashing", () => {
    const appWrappper = wrapper().find("div");
    expect(appWrappper.length).toBe(0);
  });
});
