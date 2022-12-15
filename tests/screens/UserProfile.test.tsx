import { rest } from 'msw';
import { describe, it, expect } from 'vitest';

import { UserProfile } from '@/screens/UserProfile';
import { server } from '@tests/config/server';
import { renderWithClient } from '../config/mswUtils';
import { fireEvent, screen } from '@testing-library/react';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';

const simulatesUserUpdatingHisData = async () => {
  fireEvent.change(await screen.findByTestId('lastname'), {
    target: { value: 'Dupont' },
  });
  fireEvent.change(
    await screen.findByRole('textbox', {
      name: /prénom/i,
    }),
    { target: { value: 'Jean' } }
  );

  fireEvent.change(
    await screen.findByRole('textbox', {
      name: /e-mail/i,
    }),
    { target: { value: 'jean.dupont@gmail.com' } }
  );

  fireEvent.click(
    await screen.findByRole('button', {
      name: /mettre à jour mes informations/i,
    })
  );
};

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <UserProfile />
    </RouterWrapper>
  );
};

beforeEach(() => {
  // Set the userId item in the localStorage to match the msw api route
  localStorage.setItem('userId', '2');
  renderWithClient(<MockedComponent />);
});

describe('UserProfile Screen', () => {
  it('should renders the component correctly', async () => {
    const title = await screen.findByRole('heading', { name: /profile/i });
    const avatar = await screen.findByRole('img', {
      name: /avatar utilisateur/i,
    });
    const fileInput = await screen.findByText(/modifier la photo/i);
    const lastnameInput = await screen.findByTestId('lastname');
    const firstnameInput = await screen.findByRole('textbox', {
      name: /prénom/i,
    });
    const emailInput = await screen.findByRole('textbox', {
      name: /e-mail/i,
    });
    const button = await screen.findByRole('button', {
      name: /mettre à jour mes informations/i,
    });

    expect(title).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(fileInput).toBeInTheDocument();
    expect(lastnameInput).toBeInTheDocument();
    expect(firstnameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should shows a success message if there are no errors during the request when the user submit the form', async () => {
    await simulatesUserUpdatingHisData();

    const successMessage = await screen.findByText(
      /vos informations ont bien été mises à jour !/i
    );

    expect(successMessage).toBeInTheDocument();
  });

  it('should shows an error message if there are any errors when the user submit the form', async () => {
    await simulatesUserUpdatingHisData();

    // simulates a 500 error
    server.use(
      rest.patch('*/user/2', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const errorMessage = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
