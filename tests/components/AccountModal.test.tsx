import { describe, it, expect } from "vitest";
import { fireEvent, screen } from "@testing-library/react";

import { AccountModal } from "@/components/other/AccountModal";
import { RouterWrapper } from "@tests/helpers/RouterWrapper";
import { renderWithClient } from "@tests/config/mswUtils";

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <AccountModal />
    </RouterWrapper>
  );
};

describe("AccountModal", () => {
  it("should renders 3 <li>", () => {
    renderWithClient(<MockedComponent />);

    const modalContent = screen.getAllByRole("listitem");

    expect(modalContent).toHaveLength(3);
  });
});
