import { ClipLoader } from "react-spinners";

interface Props {
  handleCancel: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => void;
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
        <h2 className="text-main-grey text-xl sm:text-2xl font-semibold mb-8">
          Êtes-vous sûr de vouloir supprimer cette activité ?
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-x-5">
          <button
            className="text-white text-base sm:text-lg w-full font-semibold bg-main-grey rounded h-10 sm:h-14"
            onClick={() => handleCancel(false)}
          >
            Annuler
          </button>
          <button
            className="text-white text-base sm:text-lg w-full font-semibold bg-main-green rounded h-10 sm:h-14"
            onClick={handleDelete}
          >
            {isLoading ? (
              <ClipLoader size={25} speedMultiplier={0.9} color="#fff" />
            ) : (
              <>Supprimer</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
