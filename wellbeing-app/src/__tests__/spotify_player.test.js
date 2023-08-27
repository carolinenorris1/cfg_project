import React from "react";
import renderer from "react-test-renderer";

import SpotifyPlayer from "../carousel/SpotifyPlayer/SpotifyPlayer";

it("renders correctly when user views the spotify player on the carousel", () => {
  const tree = renderer.create(<SpotifyPlayer />).toJSON();
  expect(tree).toMatchSnapshot();
});
