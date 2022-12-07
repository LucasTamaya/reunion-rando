import { describe, it, expect } from "vitest";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";

import { renderWithClient } from "@tests/config/mswUtils";
import { AddNewActivity } from "@/screens/AddNewActivity";
import { RouterWrapper } from "@tests/helpers/RouterWrapper";
import { server } from "@tests/config/server";
import userEvent from "@testing-library/user-event";

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <AddNewActivity />
    </RouterWrapper>
  );
};

beforeEach(async () => {
  const mockedFile = new File(["hello"], "hello.png", { type: "image/png" });

  // simulates the user filling in the form and sending it
  renderWithClient(<MockedComponent />);

  fireEvent.change(
    await screen.findByRole("textbox", {
      name: /titre/i,
    }),
    { target: { value: "A nice hike" } }
  );

  fireEvent.change(await screen.findByRole("combobox"), {
    target: { value: "Mafate" },
  });

  // const inputFile = await screen.findByLabelText(/photo de la randonnée/i);

  // await waitFor(() => {
  //   userEvent.upload(inputFile, mockedFile);
  // });

  fireEvent.change(
    await screen.findByRole("spinbutton", {
      name: /prix/i,
    }),
    { target: { value: 100 } }
  );

  fireEvent.change(
    await screen.findByRole("textbox", {
      name: /description/i,
    }),
    { target: { value: "A nice hike with a nice guy!" } }
  );

  fireEvent.click(
    await screen.findByRole("button", {
      name: /créer l'activité/i,
    })
  );
});

describe("AddNewActivity Screen", () => {
  it.only("should shows a success modal if there are no errors during the request", async () => {
    const successModal = await screen.findByText(/activité crée avec succès/i);

    expect(successModal).toBeInTheDocument();
  });

  it("should shows an error modal with an error message if there are any errors", async () => {
    // simulates a 500 error
    server.use(
      rest.post("*/activity", (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const errorModal = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorModal).toBeInTheDocument();
  });
});
