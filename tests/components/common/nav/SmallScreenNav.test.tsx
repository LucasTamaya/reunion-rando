import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";

import { SmallScreenNav } from "@/components/common/nav/SmallScreenNav";
import { RouterWrapper } from "@tests/helpers/RouterWrapper";
import { renderWithClient } from "@tests/config/mswUtils";

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <SmallScreenNav />
    </RouterWrapper>
  );
};

describe("SmallScreenNav component", () => {
  it("should renders 4 links if the user is not connected", () => {
    renderWithClient(<MockedComponent />);

    const linkOne = screen.getByRole("link", {
      name: /activités du moment/i,
    });
    const linkTwo = screen.getByRole("link", {
      name: /nos experts du terrain/i,
    });
    const linkThree = screen.getByRole("link", {
      name: /programmer ma sortie/i,
    });
    const linkFour = screen.getByRole("link", {
      name: /connexion/i,
    });

    expect(linkOne).toBeInTheDocument();
    expect(linkTwo).toBeInTheDocument();
    expect(linkThree).toBeInTheDocument();
    expect(linkFour).toBeInTheDocument();
  });

  it("should renders 6 links if the user is connected as an individual", () => {
    localStorage.setItem("role", "particulier");
    renderWithClient(<MockedComponent />);

    const linkOne = screen.getByRole("link", {
      name: /activités du moment/i,
    });
    const linkTwo = screen.getByRole("link", {
      name: /nos experts du terrain/i,
    });
    const linkThree = screen.getByRole("link", {
      name: /programmer ma sortie/i,
    });
    const linkFour = screen.getByRole("link", {
      name: /mes sorties/i,
    });
    const linkFive = screen.getByRole("link", {
      name: /modifier mes informations/i,
    });

    expect(linkOne).toBeInTheDocument();
    expect(linkTwo).toBeInTheDocument();
    expect(linkThree).toBeInTheDocument();
    expect(linkFour).toBeInTheDocument();
    expect(linkFive).toBeInTheDocument();
  });

  it("should renders 5 links if the user is connected as a provider", () => {
    localStorage.setItem("role", "prestataire");
    renderWithClient(<MockedComponent />);

    const linkOne = screen.getByRole("link", {
      name: /ajouter une activité/i,
    });
    const linkTwo = screen.getByRole("link", {
      name: /gérer mes activités/i,
    });
    const linkThree = screen.getByRole("link", {
      name: /les demandes de clients/i,
    });
    const linkFour = screen.getByRole("link", {
      name: /mes sorties/i,
    });
    const linkFive = screen.getByRole("link", {
      name: /modifier mes informations/i,
    });

    expect(linkOne).toBeInTheDocument();
    expect(linkTwo).toBeInTheDocument();
    expect(linkThree).toBeInTheDocument();
    expect(linkFour).toBeInTheDocument();
    expect(linkFive).toBeInTheDocument();
  });

  it("should renders a text that contains 'Déconnexion' if the user is connected as an individual", () => {
    localStorage.setItem("role", "particulier");
    renderWithClient(<MockedComponent />);

    const text = screen.getByText(/déconnexion/i);

    expect(text).toBeInTheDocument();
  });

  it("should renders a text that contains 'Déconnexion' if the user is connected as a provider", () => {
    localStorage.setItem("role", "prestataire");
    renderWithClient(<MockedComponent />);

    const text = screen.getByText(/déconnexion/i);

    expect(text).toBeInTheDocument();
  });
});
