import React from "react";
import renderer from "react-test-renderer";

import Wellbeing from "../pages/Community";

it("renders correctly when user navigates to the Wellbeing page", () => {
  const tree = renderer.create(<Wellbeing />).toJSON();
  expect(tree).toMatchSnapshot();
});
