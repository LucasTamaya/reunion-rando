import { Button } from "../common/Button";

interface Props {
  handleCancel: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => any;
  isLoading: boolean;
}

export const DeleteModal: React.FC<Props> = ({
  handleCancel,
  handleDelete,
  isLoading,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50">
      <div className="bg-white p-8 rounded">
        <h2 className="text-main-grey text-xl sm:text-2xl text-center font-semibold mb-8">
          Êtes-vous sûr de vouloir supprimer cette activité ?
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3 sm:gap-y-0 gap-x-5">
          <Button
            text="Annuler"
            variant="secondary"
            handleClick={() => handleCancel(false)}
          />
          <Button
            text="Supprimer"
            variant="primary"
            isLoading={isLoading}
            handleClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};
