import { render } from '@testing-library/react';
import { rest } from 'msw';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  mockedActivitiesData,
  mockedProviderActivitiesData,
  mockedUserProfileData,
} from '@tests/mocks/data';

// List of api requests used by the app
// We mock their response value to be able to test our app without
// calling our real API
export const handlers = [
  rest.post('*/register', (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.post('*/login', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ role: 'particulier' }));
  }),

  rest.get('*/hikes', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ hikes: [{ name: 'Mafate' }, { name: 'Cilaos' }] })
    );
  }),

  rest.post('*/activity', (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('*/activities', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedActivitiesData));
  }),

  rest.get('*/activities/1234', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedProviderActivitiesData));
  }),

  rest.patch('*/activity/1', (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('*/user/2', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedUserProfileData));
  }),

  rest.patch('*/user/2', (_, res, ctx) => {
    return res(ctx.status(200));
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
