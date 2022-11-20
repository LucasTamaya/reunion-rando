import { render, screen } from "@testing-library/react";

import { Nav } from "@/components/common/Nav";
import { BrowserRouter } from "react-router-dom";

const MockedComponent = () => {
  return (
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
};

describe("Nav component", () => {
  it("should renders 5 links when the user is not connected", () => {
    render(<MockedComponent />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(5);
  });
});
