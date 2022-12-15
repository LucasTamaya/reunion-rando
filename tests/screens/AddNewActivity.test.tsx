import { describe, it, expect } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { rest } from 'msw';

import { renderWithClient } from '@tests/config/mswUtils';
import { AddNewActivity } from '@/screens/AddNewActivity';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';
import { server } from '@tests/config/server';

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <AddNewActivity />
    </RouterWrapper>
  );
};

beforeEach(async () => {
  // simulates the user filling in the form and sending it
  renderWithClient(<MockedComponent />);

  fireEvent.change(
    await screen.findByRole('textbox', {
      name: /titre/i,
    }),
    { target: { value: 'Marche à Mafate' } }
  );

  fireEvent.change(await screen.findByRole('combobox'), {
    target: { value: 'Mafate' },
  });

  fireEvent.change(
    await screen.findByRole('spinbutton', {
      name: /prix/i,
    }),
    { target: { value: 100 } }
  );

  fireEvent.change(
    await screen.findByRole('textbox', {
      name: /description/i,
    }),
    { target: { value: 'Une super marche à Mafate' } }
  );

  fireEvent.click(
    await screen.findByRole('button', {
      name: /créer l'activité/i,
    })
  );
});

describe('AddNewActivity Screen', () => {
  it('should shows a success message if there are no errors during the request', async () => {
    const successMessage = await screen.findByText(
      /activité crée avec succès !/i
    );

    expect(successMessage).toBeInTheDocument();
  });

  it('should shows an error message if there are any errors', async () => {
    // simulates a 500 error
    server.use(
      rest.post('*/activity', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const errorMessage = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
