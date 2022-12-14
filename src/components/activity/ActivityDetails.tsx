import { useLocation } from "react-router-dom";

import { Nav } from "../common/nav/Nav";
import { Button } from "../common/Button";
import { Activity } from "@/types";
import { BsPersonCircle } from "react-icons/bs";

export const ActivityDetails: React.FC = () => {
  // Retrieve the activity details from the location state
  const location = useLocation();
  const activity: Activity = location.state;
  const AVATAR_URL = activity.createdBy.avatar
    ? `url("${activity.createdBy.avatar}")`
    : "";

  return (
    <>
      <Nav />
      <h1 className="text-main-green text-2xl sm:text-6xl text-center font-semibold my-10 sm:my-16">
        {activity.title}
      </h1>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-x-10 mx-auto px-5 pb-5">
        <img src={activity.image_url} alt="randonnée" className="rounded" />
        <div>
          <h2 className="text-xl sm:text-3xl text-black font-semibold mt-5 md:m-0">
            Description
          </h2>
          <p className="text-base sm:text-lg mb-10">{activity.description}</p>
          <h2 className="text-xl sm:text-3xl text-black font-semibold mb-3">
            Proposé par
          </h2>
          <div className="flex items-start mb-10">
            <p className="text-base sm:text-lg mr-5">
              {activity.createdBy.lastname} {activity.createdBy.firstname}
            </p>
            {activity.createdBy.avatar ? (
              <div
                className="w-24 h-24 rounded-full bg-cover"
                style={{ backgroundImage: AVATAR_URL }}
              ></div>
            ) : (
              <BsPersonCircle size={96} color="grey" />
            )}
          </div>
          <h2 className="text-xl sm:text-3xl text-black font-semibold">Prix</h2>
          <p className="text-base sm:text-lg mb-10">{activity.price} &euro;</p>
          <h2 className="text-xl sm:text-3xl text-black font-semibold">
            Localisation
          </h2>
          <p className="text-base sm:text-lg mb-10">{activity.location}</p>
          <a href={`mailto:${activity.createdBy.email}`} className="w-full">
            <Button text="Contacter le prestataire" variant="primary" />
          </a>
        </div>
      </div>
    </>
  );
};
