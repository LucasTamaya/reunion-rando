import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { DeleteModal } from "@/components/activity/DeleteModal";

const mockedHandleCancel = vi.fn();
const mockedHandleDelete = vi.fn();

const MockedComponent: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <DeleteModal
      handleCancel={mockedHandleCancel}
      handleDelete={mockedHandleDelete}
      isLoading={isLoading}
    />
  );
};

describe("DeleteModal Component", () => {
  it("should renders the component correctly", () => {
    render(<MockedComponent isLoading={false} />);

    const title = screen.getByRole("heading", {
      name: /êtes-vous sûr de vouloir supprimer cette activité \?/i,
    });
    const cancelBtn = screen.getByRole("button", {
      name: /annuler/i,
    });
    const deleteBtn = screen.getByRole("button", {
      name: /supprimer/i,
    });

    expect(title).toBeInTheDocument();
    expect(cancelBtn).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });

  it("should calls the handleCancel function if the user clicks on the 'Annuler' button", () => {
    render(<MockedComponent isLoading={false} />);

    const cancelBtn = screen.getByRole("button", {
      name: /annuler/i,
    });
    fireEvent.click(cancelBtn);

    expect(mockedHandleCancel).toHaveBeenCalledTimes(1);
  });

  it("should calls the handleDelete function if the user clicks on the 'Supprimer' button", () => {
    render(<MockedComponent isLoading={false} />);

    const deleteBtn = screen.getByRole("button", {
      name: /supprimer/i,
    });
    fireEvent.click(deleteBtn);

    expect(mockedHandleDelete).toHaveBeenCalledTimes(1);
  });

  it("should renders a loader if isLoading is true", () => {
    render(<MockedComponent isLoading={true} />);

    const loader = screen.getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });
});
