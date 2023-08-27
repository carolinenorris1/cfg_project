import React from "react";
import renderer from "react-test-renderer";

import Timer from "../carousel/Timer/Timer";

it("renders correctly when user views the eye timer on the carousel", () => {
  const tree = renderer.create(<Timer />).toJSON();
  expect(tree).toMatchSnapshot();
});
