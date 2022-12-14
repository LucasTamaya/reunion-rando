import { UserProfileDataValues } from "../../src/types/index";

export const mockedActivitiesData = {
  activities: [
    {
      id: "6815",
      title: "Marche Col des Boeufs",
      location: "Col des Bœufs - Marla",
      price: 40,
      description: "Superbe marche au Col des Boeufs",
      image_url:
        "http://res.cloudinary.com/dtvjrxnhw/image/upload/v1670224706/smwbpdg7g40ltoh8pgjq.jpg",
      userId: "6384881073d97965e41d5df5",
      createdBy: { lastname: "Lolo", firstname: "Lili", avatar: "" },
    },
    {
      id: "819",
      title: "Mafate",
      location: "Mafate",
      price: 40,
      description: "Superbe marche à Mafate",
      image_url:
        "http://res.cloudinary.com/dtvjrxnhw/image/upload/v1670224706/smwbpdg7g40ltoh8pgjq.jpg",
      userId: "6384881073d97965e41d5df5",
      createdBy: { lastname: "Lolo", firstname: "Lili", avatar: "" },
    },
  ],
};

export const mockedProviderActivitiesData = {
  activities: [
    {
      id: "984",
      title: "Marche Col des Boeufs",
      location: "Col des Bœufs - Marla",
      price: 40,
      description: "Superbe marche au Col des Boeufs",
      image_url:
        "http://res.cloudinary.com/dtvjrxnhw/image/upload/v1670224706/smwbpdg7g40ltoh8pgjq.jpg",
      userId: "6384881073d97965e41d5df5",
      cloudinary_public_id: "1",
    },
    {
      id: "392",
      title: "Mafate",
      location: "Mafate",
      price: 40,
      description: "Superbe marche à Mafate",
      image_url:
        "http://res.cloudinary.com/dtvjrxnhw/image/upload/v1670224706/smwbpdg7g40ltoh8pgjq.jpg",
      userId: "6384881073d97965e41d5df5",
      cloudinary_public_id: "1",
    },
  ],
};

export const mockedUserProfileData: { userData: UserProfileDataValues } = {
  userData: {
    lastname: "Doe",
    firstname: "John",
    email: "john.doe@gmail.com",
    avatar: "http://new_avatar.jpg",
    id: "2",
  },
};
