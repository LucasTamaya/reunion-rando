import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { rest } from 'msw';

import { Login } from '@/screens/Login';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';
import { renderWithClient } from '@tests/config/mswUtils';
import { server } from '@tests/config/server';

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <Login />
    </RouterWrapper>
  );
};

// simulates the user filling out the form and sending it
beforeEach(() => {
  renderWithClient(<MockedComponent />);

  fireEvent.change(
    screen.getByRole('textbox', {
      name: /e-mail/i,
    }),
    { target: { value: 'john.doe@gmail.com' } }
  );

  fireEvent.change(screen.getByLabelText(/mot de passe/i), {
    target: { value: '123456' },
  });

  fireEvent.click(
    screen.getByRole('button', {
      name: /connexion/i,
    })
  );
});

describe('Login', () => {
  it('should shows a success modal if there are no errors during the request', async () => {
    const successModal = await screen.findByText(/connexion réussie !/i);

    expect(successModal).toBeInTheDocument();
  });

  it("should shows an error modal with an error message if the user doesn't exists or if the passwords don't match", async () => {
    server.use(
      rest.post('*/login', (_, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            isError: true,
          })
        );
      })
    );

    const errorModal = await screen.findByText(
      /e-mail ou mot de passe incorrect/i
    );

    expect(errorModal).toBeInTheDocument();
  });

  it('should shows an error modal with a generic error message if there are any other errors', async () => {
    // simulates a 500 error
    server.use(
      rest.post('*/login', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const errorModal = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorModal).toBeInTheDocument();
  });
});
