import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BigScreenNav } from '@/components/common/nav/BigScreenNav';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <BigScreenNav />
    </RouterWrapper>
  );
};

describe('BigScreenNav component', () => {
  it('should renders 5 links if the user is not connected', () => {
    render(<MockedComponent />);

    const linkOne = screen.getByRole('link', {
      name: /reunionrando/i,
    });
    const linkTwo = screen.getByRole('link', {
      name: /activités du moment/i,
    });
    const linkThree = screen.getByRole('link', {
      name: /nos experts du terrain/i,
    });
    const linkFour = screen.getByRole('link', {
      name: /programmer ma sortie/i,
    });
    const linkFive = screen.getByRole('link', {
      name: /connexion/i,
    });

    expect(linkOne).toBeInTheDocument();
    expect(linkTwo).toBeInTheDocument();
    expect(linkThree).toBeInTheDocument();
    expect(linkFour).toBeInTheDocument();
    expect(linkFive).toBeInTheDocument();
  });

  it('should renders 4 links if the user is connected as an individual', () => {
    localStorage.setItem('role', 'particulier');
    render(<MockedComponent />);

    const linkOne = screen.getByRole('link', {
      name: /reunionrando/i,
    });
    const linkTwo = screen.getByRole('link', {
      name: /activités du moment/i,
    });
    const linkThree = screen.getByRole('link', {
      name: /nos experts du terrain/i,
    });
    const linkFour = screen.getByRole('link', {
      name: /programmer ma sortie/i,
    });

    expect(linkOne).toBeInTheDocument();
    expect(linkTwo).toBeInTheDocument();
    expect(linkThree).toBeInTheDocument();
    expect(linkFour).toBeInTheDocument();
  });

  it('should renders 4 links if the user is connected as a provider', () => {
    localStorage.setItem('role', 'prestataire');
    render(<MockedComponent />);

    const linkOne = screen.getByRole('link', {
      name: /reunionrando/i,
    });
    const linkTwo = screen.getByRole('link', {
      name: /ajouter une activité/i,
    });
    const linkThree = screen.getByRole('link', {
      name: /gérer mes activités/i,
    });
    const linkFour = screen.getByRole('link', {
      name: /les demandes de clients/i,
    });

    expect(linkOne).toBeInTheDocument();
    expect(linkTwo).toBeInTheDocument();
    expect(linkThree).toBeInTheDocument();
    expect(linkFour).toBeInTheDocument();
  });

  it("should renders a text that contains 'Mon compte' if the user is connected as an individual", () => {
    localStorage.setItem('role', 'particulier');
    render(<MockedComponent />);

    const text = screen.getByText(/mon compte/i);

    expect(text).toBeInTheDocument();
  });

  it("should renders a text that contains 'Mon compte' if the user is connected as a provider", () => {
    localStorage.setItem('role', 'prestataire');
    render(<MockedComponent />);

    const text = screen.getByText(/mon compte/i);

    expect(text).toBeInTheDocument();
  });
});
