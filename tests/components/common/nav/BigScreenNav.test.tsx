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
  it('should render the logo image correctly', () => {
    render(<MockedComponent />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/logo.png');
  });

  it('should render only the login link when the user is not logged in', () => {
    render(<MockedComponent />);

    const loginLink = screen.getByRole('link', { name: /connexion/i });
    const numberOfNavLinks = screen.getAllByRole('listitem');

    expect(loginLink).toBeInTheDocument();
    expect(numberOfNavLinks).toHaveLength(1);
  });

  it('should render the individual user navigation links', () => {
    localStorage.setItem('role', 'particulier');
    render(<MockedComponent />);

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
      name: /mes favoris/i,
    });

    expect(linkOne).toBeInTheDocument();
    expect(linkTwo).toBeInTheDocument();
    expect(linkThree).toBeInTheDocument();
    expect(linkFour).toBeInTheDocument();
  });

  it('should render the provider user navigation links', () => {
    localStorage.setItem('role', 'prestataire');
    render(<MockedComponent />);

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

  it('should render the "Mon compte" link when the user is logged in', () => {
    render(<MockedComponent />);

    expect(screen.getByText(/mon compte/i)).toBeInTheDocument();
  });
});
