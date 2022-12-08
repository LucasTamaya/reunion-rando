import { Nav } from "@/components/common/nav/Nav";
import { ActivityForm } from "@/components/activity/ActivityForm";
import { useAddActivity } from "@/hooks/activity/useAddActivity";

export const AddNewActivity: React.FC = () => {
  const { mutate, isLoading } = useAddActivity();

  return (
    <>
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
