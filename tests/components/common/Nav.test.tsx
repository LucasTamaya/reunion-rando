import { render, screen } from "@testing-library/react";

import { Nav } from "@/components/common/Nav";
import { RouterWrapper } from "@tests/helpers/RouterWrapper";

const MockedComponent = () => {
  return (
    <RouterWrapper>
      <Nav />
    </RouterWrapper>
  );
};

describe("Nav component", () => {
  it("should renders 5 links when the user is not connected", () => {
    render(<MockedComponent />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(5);
  });
});
