import { useLocation } from 'react-router-dom';

import { ActivityForm } from '@/components/activity/ActivityForm';
import { Nav } from '@/components/common/nav/Nav';
import { useUpdateActivity } from '@/hooks/activity/useUpdateActivity';
import HelmetSeo from '@/components/common/HelmetSeo';

export const UpdateActivity: React.FC = () => {
  interface UpdateActivityValues {
    title: string;
    location: string;
    image_url: string;
    price: number;
    description: string;
    id: string;
    cloudinary_public_id: string;
  }

  const location = useLocation();
  const {
    title,
    location: activityLocation,
    image_url,
    price,
    description,
    id,
    cloudinary_public_id,
  }: UpdateActivityValues = location.state;
  const { mutate, isLoading } = useUpdateActivity();

  return (
    <>
      <HelmetSeo
        title="RunRando - Modifier mon activité"
        description="Modifier votre activité en toute simplicité avec notre formulaire en ligne."
        path={`/modification-activite/${id}`}
      />
      <Nav />
      <ActivityForm
        formTitle="Modifier mon activité"
        buttonText="Valider les modifications"
        mutate={mutate}
        mutationLoading={isLoading}
        activityId={id}
        activityTitle={title}
        activityLocation={activityLocation}
        activityImageUrl={image_url}
        activityPrice={price}
        activityDescription={description}
        activityCloudinaryPublicId={cloudinary_public_id}
      />
    </>
  );
};
