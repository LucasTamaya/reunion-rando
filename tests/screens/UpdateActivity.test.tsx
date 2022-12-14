import { describe, it, expect, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { rest } from "msw";
import * as ReactRouter from "react-router-dom";

import { renderWithClient } from "@tests/config/mswUtils";
import { UpdateActivity } from "@/screens/UpdateActivity";
import { server } from "@tests/config/server";

vi.mock("react-router-dom", () => ({
  useLocation: vi.fn(),
  useNavigate: vi.fn(),
}));

vi.spyOn(ReactRouter, "useLocation").mockReturnValue({
  state: {
    title: "Randonnée à Mafate",
    location: "Mafate",
    image_url: "mafate.jpg",
    price: "40",
    description: "Superbe randonnée à Mafate",
    id: "1",
  },
  pathname: "/modification-activite/",
  key: "key",
  hash: "",
  search: "",
});

// Simulates the user updating the activity
beforeEach(async () => {
  renderWithClient(<UpdateActivity />);

  fireEvent.change(
    await screen.findByRole("textbox", {
      name: /titre/i,
    }),
    { target: { value: "Rando Cilaos" } }
  );

  fireEvent.change(await screen.findByRole("combobox"), {
    target: { value: "Cilaos" },
  });

  fireEvent.change(
    await screen.findByRole("spinbutton", {
      name: /prix/i,
    }),
    { target: { value: 50 } }
  );

  fireEvent.change(
    await screen.findByRole("textbox", {
      name: /description/i,
    }),
    { target: { value: "Une super marche à Cilaos" } }
  );

  fireEvent.click(
    await screen.findByRole("button", {
      name: /valider les modifications/i,
    })
  );
});

describe("UpdateActivity Screen", () => {
  it("should shows a success message if there are no errors during the request", async () => {
    const successMessage = await screen.findByText(
      /activité modifiée avec succès !/i
    );

    expect(successMessage).toBeInTheDocument();
  });

  it("should shows an error message if there are any errors", async () => {
    // simulates a 500 error
    server.use(
      rest.patch("*/activity/1", (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const errorMessage = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
