import React from "react";
import renderer from "react-test-renderer";
import { CountryProvider } from "../context/CountryContext";

import PremiumContent from "../carousel/PremiumContent/PremiumContent";

it("renders correctly when user views the premium content with default country value on the carousel", () => {
  const tree = renderer
    .create(
      <CountryProvider>
        <PremiumContent />
      </CountryProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
