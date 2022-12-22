import { ClipLoader } from 'react-spinners';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <ClipLoader
        size={25}
        speedMultiplier={0.9}
        color="#128B2D"
        data-testid="loadingSpinner"
      />
    </div>
  );
};
