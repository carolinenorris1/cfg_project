import React from "react";
import renderer from "react-test-renderer";

import Home from "../pages/Home";

it("renders correctly when user runs the app", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
