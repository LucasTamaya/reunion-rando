import { useLocation } from "react-router-dom";

import { Nav } from "../common/nav/Nav";
import { Button } from "../common/Button";
import { Activity } from "@/types";

export const ActivityDetails: React.FC = () => {
  // Retrieve the activity details from the location state
  const location = useLocation();
  const activity: Activity = location.state;

  return (
    <>
      <Nav />
      <h1 className="text-main-green text-5xl text-center font-semibold my-16">
        {activity.title}
      </h1>
      <div className="max-w-7xl grid grid-cols-2 gap-x-10 mx-auto">
        <img src={activity.image_url} alt="randonnée" className="rounded" />
        <div>
          <h2 className="text-3xl text-main-grey font-semibold">Description</h2>
          <p className="text-lg mb-10">{activity.description}</p>
          <h2 className="text-3xl text-main-grey font-semibold">Proposé par</h2>
          <div className="flex items-center mb-10">
            <p className="text-lg">
              {activity.createdBy.lastname} {activity.createdBy.firstname}
            </p>
            <div className="bg-red-500 w-10 h-10 rounded-full ml-5"></div>
          </div>
          <h2 className="text-3xl text-main-grey font-semibold">Prix</h2>
          <p className="text-lg mb-10">{activity.price}&euro;</p>
          <h2 className="text-3xl text-main-grey font-semibold">
            Localisation
          </h2>
          <p className="text-lg mb-10">{activity.location}</p>
          <a href={`mailto:${activity.createdBy.email}`} className="w-full">
            <Button text="Contacter le prestataire" variant="primary" />
          </a>
        </div>
      </div>
    </>
  );
};
