import { Toaster } from 'react-hot-toast';

import { ActivityCard } from '@/components/activity/ActivityCard';
import { Nav } from '@/components/common/nav/Nav';
import { useActivities } from '@/hooks/activity/useActivities';
import HelmetSeo from '@/components/common/HelmetSeo';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

export const CurrentActivities: React.FC = () => {
  const { isLoading, data } = useActivities();

  return (
    <>
      <HelmetSeo
        title="RunRando - Activités du moment"
        description="Découvrez les activités du moment et réservez votre prochaine sortie en quelques clics !"
        path="/activites-du-moment"
      />
      <Nav />
      <h1 className="text-2xl sm:text-6xl text-main-green text-center font-semibold my-10 sm:my-16">
        Activités du moment
      </h1>

      {isLoading ? <LoadingSpinner /> : null}

      {data && data.length === 0 ? (
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-center text-main-grey text-lg sm:text-2xl mb-10">
            Aucune activité disponible pour le moment
          </h2>
        </div>
      ) : null}

      {data && data.length > 0 ? (
        <div className="w-full h-fit max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-5 pb-5">
          {data.map(({ ...props }) => (
            <ActivityCard key={props.id} {...props} />
          ))}
        </div>
      ) : null}
      <Toaster />
    </>
  );
};
