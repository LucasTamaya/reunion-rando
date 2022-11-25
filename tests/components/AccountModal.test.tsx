import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { AccountModal } from "@/components/AccountModal";

describe("AccountModal", () => {
  it("should renders a text that contains 'Mon compte'", () => {
    render(<AccountModal />);

    const text = screen.getByText(/mon compte/i);

    expect(text).toBeInTheDocument();
  });

  it("should shows the modal when the user clicks on 'Mon compte'", () => {
    render(<AccountModal />);

    const text = screen.getByText(/mon compte/i);
    fireEvent.click(text);

    const modalLinks = screen.getAllByRole("link");

    expect(modalLinks).toHaveLength(3);
  });

  it("should hides the modal when the user clicks on 'Mon compte' twice", () => {
    render(<AccountModal />);

    const text = screen.getByText(/mon compte/i);
    fireEvent.doubleClick(text);

    const modalLinks = screen.queryAllByRole("link");

    expect(modalLinks).toHaveLength(0);
  });
});
