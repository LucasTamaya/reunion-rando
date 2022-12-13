import { Link } from "react-router-dom";

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
  const ACTIVITY_DETAILS_URL = `/activites/${id}`;
  const HIKE_BG_URL = `url("${image_url}")`;
  const AVATAR_URL = `url("${createdBy.avatar}")`;

  return (
    <Link
      data-testid="activityCard"
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
        className="relative cursor-pointer h-72 rounded bg-cover bg-center"
        style={{ backgroundImage: HIKE_BG_URL }}
      >
        <div className="absolute bottom-0 w-full flex items-center justify-between p-3 rounded-b bg-main-grey">
          <h2 className="text-white text-2xl font-semibold">{location}</h2>
          <div
            className="w-10 h-10 rounded-full bg-white"
            style={{ backgroundImage: AVATAR_URL }}
          ></div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-3">{title}</h3>
    </Link>
  );
};
