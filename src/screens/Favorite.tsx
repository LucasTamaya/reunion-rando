import { ClipLoader } from 'react-spinners';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { ActivityCard } from '@/components/activity/ActivityCard';
import { Nav } from '@/components/common/nav/Nav';
import { useSavedActivities } from '@/hooks/activity/useSavedActivities';
import { useUnsaveActivity } from '@/hooks/activity/useUnsaveActivity';
import { Button } from '@/components/common/Button';

export const Favorite: React.FC = () => {
  const { data, isLoading: savedActivitiesLoading } = useSavedActivities();
  const { mutate, isLoading: unsaveActivityLoading } = useUnsaveActivity();

  return (
    <>
      <Nav />
      <h1 className="text-6xl text-main-green text-center font-semibold my-16">
        Mes favoris
      </h1>
      {savedActivitiesLoading ? (
        <div className="w-full flex justify-center items-center">
          <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
        </div>
      ) : null}

      {data && data.length === 0 ? (
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-center text-main-grey text-lg sm:text-2xl mb-10">
            Vous n'avez pas encore ajouté d'activités à vos favoris
          </h2>
          <Link to="/activites-du-moment">
            <Button text="Voir les activités du moment" variant="primary" />
          </Link>
        </div>
      ) : null}

      {data ? (
        <div className="w-full h-fit max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-5 pb-5">
          {data.map(({ ...props }) => (
            <div>
              <ActivityCard key={props.id} {...props} />
              <div className="mb-5"></div>
              <Button
                text="Retirer des favoris"
                variant="secondary"
                handleClick={() => mutate(props.id)}
                isLoading={unsaveActivityLoading}
              />
            </div>
          ))}
        </div>
      ) : null}
      <Toaster />
    </>
  );
};
