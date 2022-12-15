import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

import { Activity } from "@/types";

export const ActivityCard: React.FC<Activity> = ({
  title,
  location,
  image_url,
  price,
  description,
  createdBy,
  id,
}) => {
  const { avatar } = createdBy;
  const ACTIVITY_DETAILS_URL = `/activites/${id}`;
  const HIKE_BG_URL = `url("${image_url}")`;
  const AVATAR_URL = avatar ? `url("${createdBy.avatar}")` : "";

  return (
    <Link
      data-testid="activityCard"
      className="bg-white block h-fit shadow-xl rounded transition hover:scale-105"
      to={ACTIVITY_DETAILS_URL}
      state={{
        title,
        location,
        image_url,
        price,
        description,
        createdBy,
      }}
    >
      <div
        className="relative cursor-pointer h-72 rounded-tl rounded-tr bg-cover bg-center mb-3"
        style={{ backgroundImage: HIKE_BG_URL }}
        data-testid="hikeBackground"
      ></div>
      <div className="p-3">
        <h2 className="text-black text-2xl font-semibold">{location}</h2>
        <p className="text-gray-500 font-semibold mb-3">{price} &euro;</p>
        {AVATAR_URL ? (
          <div
            className="w-24 h-24 rounded-full bg-cover"
            style={{ backgroundImage: AVATAR_URL }}
            data-testid="avatar"
          ></div>
        ) : (
          <BsPersonCircle
            size={96}
            color="grey"
            data-testid="emptyAvatarIcon"
          />
        )}
      </div>
    </Link>
  );
};
