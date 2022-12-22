import { useLocation } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { Toaster } from 'react-hot-toast';

import { Activity } from '@/types';
import { Nav } from '@/components/common/nav/Nav';
import { Button } from '@/components/common/Button';
import { useSaveActivity } from '@/hooks/activity/useSaveActivity';
import HelmetSeo from '@/components/common/HelmetSeo';

export const ActivityDetails: React.FC = () => {
  const { mutate, isLoading } = useSaveActivity();
  // Retrieve and destructure the activity details from the location state
  const location = useLocation();
  const {
    title,
    image_url,
    description,
    price,
    createdBy,
    id,
    location: hikeLocation,
  }: Activity = location.state;

  const { lastname, firstname, email, avatar } = createdBy;
  const AVATAR_URL = avatar ? `url("${avatar}")` : '';

  return (
    <>
      <HelmetSeo
        title="RunRando | Détails de l'activité"
        description="Visualisez tous les détails de votre activité en un coup d'œil."
        path={`/activites/${id}`}
      />
      <Nav />
      <h1 className="text-main-green text-2xl sm:text-6xl text-center font-semibold my-10 sm:my-16">
        {title}
      </h1>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-x-10 mx-auto px-5 pb-5">
        <img src={image_url} alt="randonnée" className="rounded" />
        <div>
          <h2 className="text-xl sm:text-3xl text-black font-semibold mt-5 md:m-0">
            Description
          </h2>
          <p className="text-base sm:text-lg mb-10">{description}</p>
          <h2 className="text-xl sm:text-3xl text-black font-semibold mb-3">
            Proposé par
          </h2>
          <div className="flex items-start mb-10">
            <p className="text-base sm:text-lg mr-5">
              {lastname} {firstname}
            </p>
            {avatar ? (
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
          <h2 className="text-xl sm:text-3xl text-black font-semibold">Prix</h2>
          <p className="text-base sm:text-lg mb-10">{price} &euro;</p>
          <h2 className="text-xl sm:text-3xl text-black font-semibold">
            Localisation
          </h2>
          <p className="text-base sm:text-lg mb-10">{hikeLocation}</p>
          <a href={`mailto:${email}`} className="block w-full mb-5">
            <Button text="Contacter le prestataire" variant="primary" />
          </a>
          <Button
            text="Ajouter à mes favoris"
            variant="secondary"
            isLoading={isLoading}
            handleClick={() => mutate(id)}
          />
        </div>
      </div>
      <Toaster />
    </>
  );
};
