import { ClipLoader } from "react-spinners";

import { UpdateActivityCard } from "@/components/activity/UpdateActivityCard";
import { Nav } from "@/components/common/Nav";
import { useProviderActivities } from "@/hooks/activity/useProviderActivities";

// listing des activités (creation route api + hook) OK
// recuperation de data OK
// UI avec les activités OK
// ajout d'icones pour modifier / supprimer l'activité

export const ManageActivities: React.FC = () => {
  const { isLoading, data } = useProviderActivities();

  return (
    <div>
      <Nav />
      <h1 className="text-6xl text-main-green text-center font-semibold my-16">
        Gérer mes activités
      </h1>
      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
        </div>
      ) : null}

      {data ? (
        <div className="w-full max-w-7xl h-screen grid grid-cols-3 gap-10 mx-auto">
          {data.map(({ ...props }) => (
            <UpdateActivityCard {...props} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
