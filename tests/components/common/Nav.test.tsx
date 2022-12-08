import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Nav } from "@/components/common/nav/Nav";
import { RouterWrapper } from "@tests/helpers/RouterWrapper";

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <Nav />
    </RouterWrapper>
  );
};

describe("Nav component", () => {
  it("should renders 5 links when the user is not connected", () => {
    render(<MockedComponent />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(5);
  });

  it("should renders a link that contains 'Connexion' when the user is not connected", () => {
    render(<MockedComponent />);

    const link = screen.getByRole("link", {
      name: /connexion/i,
    });

    expect(link).toBeInTheDocument();
  });

  it("should renders 4 links if the user is connected as an individual", () => {
    localStorage.setItem("role", "particulier");
    render(<MockedComponent />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(4);
  });

  it("should renders a text that contains 'Mon compte' if the user is connected as an individual", () => {
    localStorage.setItem("role", "particulier");
    render(<MockedComponent />);

    const text = screen.getByText(/mon compte/i);

    expect(text).toBeInTheDocument();
  });
});
