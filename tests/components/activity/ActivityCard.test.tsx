import { describe, it, expect } from "vitest";

import { ActivityCard } from "@/components/activity/ActivityCard";
import { RouterWrapper } from "@tests/helpers/RouterWrapper";
import { UserData } from "@/types/index";
import { render, screen } from "@testing-library/react";

// Mock activityCard props but without the createdBy props
// so we can then pass that props to the MockedComponent to
// test when the user has an avatar url and when he hasn't
const mockedActivityCardProps = {
  title: "Super randonnée à Mafate",
  location: "Mafate",
  image_url: "mafate.jpg",
  price: 40,
  description: "Venez découvrir Mafate avec moi",
  id: "1",
  userId: "1",
  cloudinary_public_id: "1",
};

const MockedComponent: React.FC<UserData> = ({ ...userData }: UserData) => {
  return (
    <RouterWrapper>
      <ActivityCard {...mockedActivityCardProps} createdBy={userData} />
    </RouterWrapper>
  );
};

describe("ActivityCard Component", () => {
  it("should renders the component correctly with a user avatar", () => {
    render(
      <MockedComponent
        lastname="Doe"
        firstname="John"
        email="john.doe@gmail.com"
        avatar="avatar.jpg"
      />
    );

    const link = screen.getByRole("link");
    const hikeBackground = screen.getByTestId("hikeBackground");
    const price = screen.getByText(/40 €/i);
    const avatar = screen.getByTestId("avatar");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/activites/1");
    expect(hikeBackground).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });

  it("should renders the component correctly with an empty user avatar icon", () => {
    render(
      <MockedComponent
        lastname="Doe"
        firstname="John"
        email="john.doe@gmail.com"
        avatar=""
      />
    );

    const link = screen.getByRole("link");
    const hikeBackground = screen.getByTestId("hikeBackground");
    const price = screen.getByText(/40 €/i);
    const emptyAvatarIcon = screen.getByTestId("emptyAvatarIcon");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/activites/1");
    expect(hikeBackground).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(emptyAvatarIcon).toBeInTheDocument();
  });
});
