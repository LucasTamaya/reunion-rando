import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { ProviderUserNavLinks } from "@/components/common/nav/links/ProviderUserNavLinks";
import { RouterWrapper } from "@tests/helpers/RouterWrapper";

const MockedComponent: React.FC = () => {
  return (
    <RouterWrapper>
      <ProviderUserNavLinks />
    </RouterWrapper>
  );
};

describe("ProviderUserNavLinks Component", () => {
  it("should renders 3 links", () => {
    render(<MockedComponent />);

    const linkOne = screen.getByRole("link", {
      name: /ajouter une activité/i,
    });
    const linkTwo = screen.getByRole("link", {
      name: /gérer mes activités/i,
    });
    const linkThree = screen.getByRole("link", {
      name: /les demandes de clients/i,
    });

    expect(linkOne).toBeInTheDocument();
    expect(linkOne).toHaveAttribute("href", "/nouvelle-activite");
    expect(linkTwo).toBeInTheDocument();
    expect(linkTwo).toHaveAttribute("href", "/gerer-mes-activites");
    expect(linkThree).toBeInTheDocument();
    expect(linkThree).toHaveAttribute("href", "/demandes-clients");
  });
});
