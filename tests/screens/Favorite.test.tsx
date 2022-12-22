import { rest } from 'msw';
import { describe, it, expect } from 'vitest';

import { Favorite } from '@/screens/Favorite';
import { fireEvent, screen } from '@testing-library/react';
import { server } from '@tests/config/server';
import { renderWithClient } from '../config/mswUtils';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';

const MockedComponent: React.FC = () => {
  return (
    <RouterWrapper>
      <Favorite />
    </RouterWrapper>
  );
};

beforeEach(() => {
  localStorage.setItem('userId', '2');
});

describe('Favorite Screen', () => {
  it('should render a loading spinner while data is loading', () => {
    renderWithClient(<MockedComponent />);

    const loadingSpinner = screen.getByTestId('loadingSpinner');

    expect(loadingSpinner).toBeInTheDocument();
  });

  it('should render a message and a link to see activities if there are no saved activities', async () => {
    renderWithClient(<MockedComponent />);

    // simulates that there are no saved activities
    server.use(
      rest.get('*/users/2/saved-activities', (_, res, ctx) => {
        return res(ctx.status(200), ctx.json({ activities: [] }));
      })
    );

    const message = await screen.findByRole('heading', {
      name: /vous n'avez pas encore ajouté d'activités à vos favoris/i,
    });
    const link = await screen.findByRole('link', {
      name: /voir les activités du moment/i,
    });

    expect(message).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/activites-du-moment');
  });

  it('should render a list of activity cards and unsave buttons if there are saved activities', async () => {
    renderWithClient(<MockedComponent />);

    const activityCards = await screen.findAllByTestId('activityCard');

    expect(activityCards).toHaveLength(2);
  });

  it('should render a success message if there are no errors when the user unsave an activity', async () => {
    renderWithClient(<MockedComponent />);

    const unsaveButtons = await screen.findAllByRole('button', {
      name: /retirer des favoris/i,
    });
    fireEvent.click(unsaveButtons[0]);
    const successMessage = await screen.findByText(
      /activité retirée des favoris/i
    );

    expect(successMessage).toBeInTheDocument();
  });

  it('should render an error message if there are any errors while saved activities data is loading', async () => {
    renderWithClient(<MockedComponent />);

    // simulates a 500 error
    server.use(
      rest.get('*/users/2/saved-activities', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const errorMessage = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it('should render an error message if there are any errors when the user unsave an activity', async () => {
    renderWithClient(<MockedComponent />);

    server.use(
      rest.patch('*/activity/6815/unsave', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const errorMessage = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
