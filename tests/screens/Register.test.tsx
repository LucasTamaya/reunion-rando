import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { rest } from 'msw';

import { Register } from '@/screens/Register';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';
import { renderWithClient } from '@tests/config/mswUtils';
import { server } from '@tests/config/server';
import { HelmetSeoWrapper } from '@tests/helpers/HelmetSeoWrapper';

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <HelmetSeoWrapper>
        <Register />
      </HelmetSeoWrapper>
    </RouterWrapper>
  );
};

beforeEach(() => {
  // simulates the user filling in the form and sending it
  renderWithClient(<MockedComponent />);

  fireEvent.change(screen.getByTestId('lastname'), {
    target: { value: 'doe' },
  });

  fireEvent.change(
    screen.getByRole('textbox', {
      name: /prénom/i,
    }),
    { target: { value: 'john' } }
  );

  fireEvent.change(
    screen.getByRole('textbox', {
      name: /e-mail/i,
    }),
    { target: { value: 'john.doe@gmail.com' } }
  );

  fireEvent.change(screen.getByLabelText(/mot de passe/i), {
    target: { value: '123456' },
  });

  // select input
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'particulier' } });

  fireEvent.click(
    screen.getByRole('button', {
      name: /créer un compte/i,
    })
  );
});

describe('Register', () => {
  it('should render the logo image with a link to navigate to the Home screen', () => {
    const imageLogoWithALink = screen.getByRole('link', { name: /logo/i });

    expect(imageLogoWithALink).toBeInTheDocument();
    expect(imageLogoWithALink).toHaveAttribute('href', '/');
  });

  it('should shows a success modal if there are no errors during the request', async () => {
    const successModal = await screen.findByText(/compte crée avec succès/i);

    expect(successModal).toBeInTheDocument();
  });

  it('should shows an error modal with a specific error message if the user already exists', async () => {
    // simulates a 409 error (conflict error)
    server.use(
      rest.post('*/register', (_, res, ctx) => {
        return res(
          ctx.status(409),
          ctx.json({ message: "L'utilisateur existe déjà" })
        );
      })
    );

    const errorModal = await screen.findByText(/l'utilisateur existe déjà/i);

    expect(errorModal).toBeInTheDocument();
  });

  it('should shows an error modal with a generic error message if there are any other errors', async () => {
    // simulates a 500 error
    server.use(
      rest.post('*/register', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const errorModal = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorModal).toBeInTheDocument();
  });
});
