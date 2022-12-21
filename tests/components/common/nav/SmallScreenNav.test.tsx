import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { SmallScreenNav } from '@/components/common/nav/SmallScreenNav';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';
import { renderWithClient } from '@tests/config/mswUtils';

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <SmallScreenNav />
    </RouterWrapper>
  );
};

describe('SmallScreenNav component', () => {
  it('should render the logo image correctly', () => {
    renderWithClient(<MockedComponent />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/logo.png');
  });

  it('should render only the login link when the user is not logged in', () => {
    renderWithClient(<MockedComponent />);

    const loginLink = screen.getByRole('link', { name: /connexion/i });
    const numberOfNavLinks = screen.getAllByRole('listitem');

    expect(loginLink).toBeInTheDocument();
    expect(numberOfNavLinks).toHaveLength(1);
  });

  it('should render the individual user navigation links', () => {
    localStorage.setItem('role', 'particulier');
    renderWithClient(<MockedComponent />);

    const linkOne = screen.getByRole('link', {
      name: /logo/i,
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

  it('should render the provider user navigation links', () => {
    localStorage.setItem('role', 'prestataire');
    renderWithClient(<MockedComponent />);

    const linkOne = screen.getByRole('link', {
      name: /logo/i,
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

  it('should render a "Déconnexion" link if the user is logged in', () => {
    localStorage.setItem('role', 'particulier');
    renderWithClient(<MockedComponent />);

    expect(screen.getByText(/déconnexion/i)).toBeInTheDocument();
  });
});
