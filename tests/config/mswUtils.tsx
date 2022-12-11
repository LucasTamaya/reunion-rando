/* eslint-disable no-console */
// Mock Service Worker => mock api requests
import { render } from "@testing-library/react";
import { rest } from "msw";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  mockedActivitiesData,
  mockedProviderActivitiesData,
} from "@tests/mocks/data";

export const handlers = [
  rest.post("*/register", (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.post("*/login", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ role: "particulier" }));
  }),

  rest.get("*/hikes", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ hikes: [{ name: "Mafate" }, { name: "Cilaos" }] })
    );
  }),

  rest.post("*/activity", (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get("*/activities", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedActivitiesData));
  }),

  rest.get("*/activities/1234", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedProviderActivitiesData));
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
