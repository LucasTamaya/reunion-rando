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
  userId,
}) => {
  const hikeBackground = `url("${image_url}")`;
  const avatar = `url("${createdBy.avatar}")`;

  return (
    <Link
      data-testid="activityCard"
      to={`/activites/${id}`}
      state={{
        title,
        location,
        image_url,
        price,
        description,
        createdBy,
        userId,
      }}
    >
      <div
        className="relative cursor-pointer h-72 rounded bg-cover bg-center"
        style={{ backgroundImage: hikeBackground }}
      >
        <div className="absolute bottom-0 w-full flex items-center justify-between p-3 rounded-b bg-[#3e363f]">
          <h2 className="text-white text-2xl font-semibold">{location}</h2>
          <div
            className="w-10 h-10 rounded-full bg-white"
            style={{ backgroundImage: avatar }}
          ></div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-3">{title}</h3>
    </Link>
  );
};
