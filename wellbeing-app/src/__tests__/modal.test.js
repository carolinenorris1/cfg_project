import React from "react";
import { waitFor, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CountryProvider } from "../context/CountryContext";
import Header from "../components/Header";

test("Modal visible after country click and disappears after close click", async () => {
  render(
    <CountryProvider>
      <Header />
    </CountryProvider>
  );

  const countryButton = screen.getByText("UK");
  expect(screen.queryByTestId("country-modal")).not.toBeInTheDocument();

  userEvent.click(countryButton);
  await waitFor(() => {
    expect(screen.queryByTestId("country-modal")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue("UK");
  });

  const closeButton = screen.getByTestId("btn-modal-close");

  userEvent.click(closeButton);
  await waitFor(() => {
    expect(screen.queryByTestId("country-modal")).not.toBeInTheDocument();
  });
});
