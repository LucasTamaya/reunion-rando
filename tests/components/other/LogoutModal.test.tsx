import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { LogoutModal } from '@/components/other/LogoutModal';

const mockedHandleCancel = vi.fn();
const mockedHandleLogout = vi.fn();

describe('LogoutModal Component', () => {
  it('should renders the component correctly', () => {
    render(
      <LogoutModal
        handleCancel={mockedHandleCancel}
        handleLogout={mockedHandleLogout}
        isLoading={false}
      />
    );

    const title = screen.getByRole('heading', {
      name: /êtes-vous sûr de vouloir vous déconnecter/i,
    });
    const cancelButton = screen.getByRole('button', { name: /annuler/i });
    const logoutButton = screen.getByRole('button', {
      name: /me déconnecter/i,
    });

    expect(title).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  it('should calls handleCancel prop function when the user clicks on the cancel button', () => {
    render(
      <LogoutModal
        handleCancel={mockedHandleCancel}
        handleLogout={mockedHandleLogout}
        isLoading={false}
      />
    );

    const cancelButton = screen.getByRole('button', { name: /annuler/i });
    fireEvent.click(cancelButton);

    expect(mockedHandleCancel).toHaveBeenCalledTimes(1);
  });

  it('should calls handleLogout prop function when the user clicks on the logout button', () => {
    render(
      <LogoutModal
        handleCancel={mockedHandleCancel}
        handleLogout={mockedHandleLogout}
        isLoading={false}
      />
    );

    const logoutButton = screen.getByRole('button', {
      name: /me déconnecter/i,
    });
    fireEvent.click(logoutButton);

    expect(mockedHandleLogout).toHaveBeenCalledTimes(1);
  });

  it('should renders a loading spinner when isLoading is true', () => {
    render(
      <LogoutModal
        handleCancel={mockedHandleCancel}
        handleLogout={mockedHandleLogout}
        isLoading={true}
      />
    );

    const loadingSpinner = screen.getByTestId('loader');

    expect(loadingSpinner).toBeInTheDocument();
  });
});
