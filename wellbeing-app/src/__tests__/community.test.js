import React from "react";
import renderer from "react-test-renderer";

import Community from "../pages/Community";

it("renders correctly when user navigates to the Community page", () => {
  const tree = renderer.create(<Community />).toJSON();
  expect(tree).toMatchSnapshot();
});
