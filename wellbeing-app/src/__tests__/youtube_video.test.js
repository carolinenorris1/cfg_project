import React from "react";
import renderer from "react-test-renderer";

import YouTubeVideo from "../carousel/YouTubeVideo/YouTubeVideo";

it("renders correctly when user views the youtube video on the carousel", () => {
  const tree = renderer.create(<YouTubeVideo />).toJSON();
  expect(tree).toMatchSnapshot();
});
