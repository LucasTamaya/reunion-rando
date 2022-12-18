import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { server } from '@tests/config/server';
import { rest } from 'msw';

import { CurrentActivities } from '@/screens/CurrentActivities';
import { renderWithClient } from '../config/mswUtils';
import { RouterWrapper } from '@tests/helpers/RouterWrapper';
import { HelmetSeoWrapper } from '@tests/helpers/HelmetSeoWrapper';

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <HelmetSeoWrapper>
        <CurrentActivities />
      </HelmetSeoWrapper>
    </RouterWrapper>
  );
};

describe('CurrentActivities Screen', () => {
  it('should renders some Activity Cards if there are no errors during the request', async () => {
    renderWithClient(<MockedComponent />);

    const activityCards = await screen.findAllByTestId('activityCard');

    expect(activityCards).toHaveLength(2);
  });

  it('should renders an error modal if there are any errors during the request', async () => {
    renderWithClient(<MockedComponent />);

    // simulates a 500 error
    server.use(
      rest.get('*/activities', (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const errorModal = await screen.findByText(
      /une erreur est survenue, veuillez réessayer/i
    );

    expect(errorModal).toBeInTheDocument();
  });
});
