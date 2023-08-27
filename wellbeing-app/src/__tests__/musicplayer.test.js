import React from "react";
import renderer from "react-test-renderer";

import InternalMusicPlayer from "../carousel/MusicPlayer/InternalMusicPlayer";

it("renders correctly when user views the music player on the carousel", () => {
  const tree = renderer.create(<InternalMusicPlayer />).toJSON();
  expect(tree).toMatchSnapshot();
});
