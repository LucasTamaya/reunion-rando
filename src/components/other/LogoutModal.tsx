import { ClipLoader } from "react-spinners";

interface Props {
  handleCancel: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
  isLoading: boolean;
}

export const LogoutModal: React.FC<Props> = ({
  handleCancel,
  handleLogout,
  isLoading,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50">
      <div className="bg-white p-8 rounded mx-5">
        <h2 className="text-main-grey text-xl sm:text-2xl text-center font-semibold mb-8">
          Êtes-vous sûr de vouloir vous déconnecter ?
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3 sm:gap-y-0 gap-x-5">
          <button
            className="text-white text-base sm:text-lg w-full font-semibold bg-main-grey rounded h-10 sm:h-14"
            onClick={() => handleCancel(false)}
          >
            Annuler
          </button>
          <button
            className="text-white text-base sm:text-lg w-full font-semibold bg-main-green rounded h-10 sm:h-14"
            onClick={handleLogout}
          >
            {isLoading ? (
              <ClipLoader size={25} speedMultiplier={0.9} color="#fff" />
            ) : (
              <>Me déconnecter</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
