import { render, screen } from "@testing-library/react";

import { Nav } from "@/components/common/Nav";

describe("Nav component", () => {
  it("should renders 5 links when the user is not connected", () => {
    render(<Nav />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(5);
  });
});
