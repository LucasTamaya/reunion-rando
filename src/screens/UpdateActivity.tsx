import { useLocation } from 'react-router-dom';

import { ActivityForm } from '@/components/activity/ActivityForm';
import { Nav } from '@/components/common/nav/Nav';
import { useUpdateActivity } from '@/hooks/activity/useUpdateActivity';

export const UpdateActivity: React.FC = () => {
  const loc = useLocation();
  const { title, location, image_url, price, description, id } = loc.state;
  const { mutate, isLoading } = useUpdateActivity();

  return (
    <>
      <Nav />
      <ActivityForm
        formTitle="Modifier mon activité"
        buttonText="Valider les modifications"
        mutate={mutate}
        mutationLoading={isLoading}
        activityId={id}
        activityTitle={title}
        activityLocation={location}
        activityImageUrl={image_url}
        activityPrice={price}
        activityDescription={description}
      />
    </>
  );
};
