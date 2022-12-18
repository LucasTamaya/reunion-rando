import { Nav } from '@/components/common/nav/Nav';
import { ActivityForm } from '@/components/activity/ActivityForm';
import { useAddActivity } from '@/hooks/activity/useAddActivity';
import HelmetSeo from '@/components/common/HelmetSeo';

export const AddNewActivity: React.FC = () => {
  const { mutate, isLoading } = useAddActivity();

  return (
    <>
      <HelmetSeo
        title="RunRando | Ajoutez une nouvelle activité"
        description="Vous avez une nouvelle activité à proposer ? N'hésitez pas à l'ajouter grâce à notre formulaire en ligne !"
        path="/nouvelle-activite"
      />
      <Nav />
      <ActivityForm
        formTitle="Ajoutez une nouvelle activité"
        buttonText="Créer l'activité"
        mutate={mutate}
        mutationLoading={isLoading}
      />
    </>
  );
};
