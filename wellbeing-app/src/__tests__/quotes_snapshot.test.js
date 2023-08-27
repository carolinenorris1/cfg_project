import React from "react";
import renderer from "react-test-renderer";

import Quotes from "../carousel/Quotes/Quotes";

it("renders correctly when user views the daily quote on the carousel", () => {
  const tree = renderer.create(<Quotes />).toJSON();
  expect(tree).toMatchSnapshot();
});
