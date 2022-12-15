import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { CommonNavLinks } from '@/components/common/nav/links/CommonNavLinks';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';

const mockedSetShowLogoutModal = vi.fn();

const MockedComponent: React.FC = () => {
  return (
    <RouterWrapper>
      <CommonNavLinks setShowLogoutModal={mockedSetShowLogoutModal} />
    </RouterWrapper>
  );
};

describe('CommonNavLinks Component', () => {
  it('should renders 1 link if the user is not connected', () => {
    render(<MockedComponent />);

    const linkOne = screen.getByRole('link', {
      name: /connexion/i,
    });

    expect(linkOne).toBeInTheDocument();
    expect(linkOne).toHaveAttribute('href', '/connexion');
  });

  it('should renders 2 links and a logout button if the user is connected', () => {
    // simulates that the user is connected
    localStorage.setItem('role', 'particulier');

    render(<MockedComponent />);

    const linkOne = screen.getByRole('link', {
      name: /mes sorties/i,
    });
    const linkTwo = screen.getByRole('link', {
      name: /modifier mes informations/i,
    });
    const logoutButton = screen.getByText(/déconnexion/i);

    expect(linkOne).toBeInTheDocument();
    expect(linkOne).toHaveAttribute('href', '/mes-sorties');
    expect(linkTwo).toBeInTheDocument();
    expect(linkTwo).toHaveAttribute('href', '/profile');
    expect(logoutButton).toBeInTheDocument();
  });

  it('shoulds calls setShowLogoutModal with true in parameter if the user clicks on the logout button', () => {
    render(<MockedComponent />);

    const logoutButton = screen.getByText(/déconnexion/i);
    fireEvent.click(logoutButton);

    expect(mockedSetShowLogoutModal).toHaveBeenCalledTimes(1);
    expect(mockedSetShowLogoutModal).toHaveBeenCalledWith(true);
  });
});
