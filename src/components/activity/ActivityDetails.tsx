import { useLocation } from "react-router-dom";

import { Nav } from "../common/Nav";

export const ActivityDetails: React.FC = () => {
  const loc = useLocation();
  const { title, location, image_url, price, description, createdBy, userId } =
    loc.state;

  console.log(
    title,
    location,
    image_url,
    price,
    description,
    createdBy,
    userId
  );

  return (
    <>
      <Nav />
      <h1 className="text-main-green text-5xl text-center font-semibold my-16">
        {title}
      </h1>
      <div className="max-w-7xl grid grid-cols-2 gap-x-10 mx-auto">
        <img src={image_url} alt="randonnée" />
        <div>
          <h2 className="text-3xl text-main-grey font-semibold">Description</h2>
          <p className="text-lg mb-10">{description}</p>
          <h2 className="text-3xl text-main-grey font-semibold">Proposé par</h2>
          <div className="flex items-center mb-10">
            <p className="text-lg">
              {createdBy.lastname} {createdBy.firstname}
            </p>
            <div className="bg-red-500 w-10 h-10 rounded-full ml-5"></div>
          </div>
          <h2 className="text-3xl text-main-grey font-semibold">Prix</h2>
          <p className="text-lg mb-10">{price}&euro;</p>
          <h2 className="text-3xl text-main-grey font-semibold">
            Localisation
          </h2>
          <p className="text-lg mb-10">{location}</p>
          <button className="w-full text-white text-base sm:text-lg font-semibold bg-main-green rounded p-2 sm:p-3">
            <a
              href={`mailto:${createdBy.email}`}
              className="block w-full h-full"
            >
              Contacter le prestataire
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
