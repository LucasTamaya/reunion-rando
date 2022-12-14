import { ClipLoader } from "react-spinners";
import { Toaster } from "react-hot-toast";

import { ActivityCard } from "@/components/activity/ActivityCard";
import { Nav } from "@/components/common/nav/Nav";
import { useActivities } from "@/hooks/activity/useActivities";

export const CurrentActivities: React.FC = () => {
  const { isLoading, data } = useActivities();

  return (
    <>
      <Nav />
      <h1 className="text-2xl sm:text-6xl text-main-green text-center font-semibold my-10 sm:my-16">
        Activités du moment
      </h1>
      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
        </div>
      ) : null}
      {data ? (
        <div className="w-full max-w-7xl h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-5">
          {data.map(({ ...props }) => (
            <ActivityCard key={props.id} {...props} />
          ))}
        </div>
      ) : null}
      <Toaster />
    </>
  );
};
