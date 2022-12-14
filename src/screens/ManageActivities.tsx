import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { ManageActivityCard } from '@/components/activity/ManageActivityCard';
import { Nav } from '@/components/common/nav/Nav';
import { useProviderActivities } from '@/hooks/activity/useProviderActivities';
import { Button } from '@/components/common/Button';
import HelmetSeo from '@/components/common/HelmetSeo';

export const ManageActivities: React.FC = () => {
  const { isLoading, data } = useProviderActivities();

  return (
    <>
      <HelmetSeo
        title="RunRando - Gérer mes activités"
        description="Visualisez toutes vos activités en un coup d'œil, modifiez-les ou supprimez-les facilement, et créez de nouvelles activités en quelques cliques."
        path="/gerer-mes-activites"
      />
      <Nav />
      <h1 className="text-2xl sm:text-6xl text-main-green text-center font-semibold my-10 sm:my-16">
        Gérer mes activités
      </h1>
      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
        </div>
      ) : null}

      {data && data.length === 0 ? (
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-center text-main-grey text-lg sm:text-2xl mb-10">
            Vous n'avez pas encore créé d'activités
          </h2>
          <Link to="/nouvelle-activite">
            <Button text="Créer une activité" variant="primary" />
          </Link>
        </div>
      ) : null}

      {data && data.length > 0 ? (
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-5">
          {data.map(({ ...props }) => (
            <ManageActivityCard key={props.id} {...props} />
          ))}
        </div>
      ) : null}
      <Toaster />
    </>
  );
};
