import { describe, it, expect, beforeEach } from "vitest";
import { rest } from "msw";

import { ManageActivities } from "@/screens/ManageActivities";
import { renderWithClient } from "@tests/config/mswUtils";
import { RouterWrapper } from "@tests/helpers/RouterWrapper";
import { screen } from "@testing-library/react";
import { server } from "@tests/config/server";

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <ManageActivities />
    </RouterWrapper>
  );
};

beforeEach(() => {
  // mock localStorage item to match msw handler
  localStorage.setItem("userId", "1234");
});

describe("ManageActivities Screen", () => {
  it("should renders some ManageActivityCard if there are no errors", async () => {
    renderWithClient(<MockedComponent />);

    const manageActivityCardTitleOne = await screen.findByRole("heading", {
      name: /marche col des boeufs/i,
    });
    const manageActivityCardTitleTwo = await screen.findByRole("heading", {
      name: /mafate/i,
    });

    expect(manageActivityCardTitleOne).toBeInTheDocument();
    expect(manageActivityCardTitleTwo).toBeInTheDocument();
  });

  it("should renders a message and a link to create an activity if there are no activities", async () => {
    // simulates that the request returns no activities
    server.use(
      rest.get("*/activities/1234", (_, res, ctx) => {
        return res(ctx.status(200), ctx.json({ activities: [] }));
      })
    );

    renderWithClient(<MockedComponent />);

    const message = await screen.findByRole("heading", {
      name: /vous n'avez pas encore créé d'activités/i,
    });

    const link = await screen.findByRole("link", {
      name: /créer une activité/i,
    });

    expect(message).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it("should renders an error message if there are any errors", async () => {
    server.use(
      rest.get("*/activities/1234", (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithClient(<MockedComponent />);

    const errorMessage = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
