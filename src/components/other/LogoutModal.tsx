import { Button } from '../common/Button';

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
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50 z-10">
      <div className="bg-white p-8 rounded mx-5">
        <h2 className="text-main-grey text-xl sm:text-2xl text-center font-semibold mb-8">
          Êtes-vous sûr de vouloir vous déconnecter ?
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3 sm:gap-y-0 gap-x-5">
          <Button
            text="Annuler"
            variant="secondary"
            handleClick={() => handleCancel(false)}
          />
          <Button
            text="Me déconnecter"
            variant="primary"
            isLoading={isLoading}
            handleClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};
