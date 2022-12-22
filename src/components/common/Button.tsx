import { ClipLoader } from 'react-spinners';
import classnames from 'classnames';

interface Props {
  text: string;
  variant: 'primary' | 'secondary';
  isLoading?: boolean;
  handleClick?: () => any;
}

export const Button: React.FC<Props> = ({
  text,
  variant,
  isLoading,
  handleClick,
}) => {
  // Define the classname for the button based on the variant prop
  const className = classnames(
    'w-full text-white text-sm sm:text-lg',
    'flex justify-center items-center font-semibold rounded h-10 sm:h-14',
    {
      'bg-main-green': variant === 'primary',
      'bg-main-grey': variant === 'secondary',
    }
  );

  return (
    <button className={className} type="submit" onClick={handleClick}>
      {isLoading ? (
        <ClipLoader
          size={25}
          speedMultiplier={0.9}
          color="#fff"
          data-testid="loadingSpinner"
        />
      ) : (
        <>{text}</>
      )}
    </button>
  );
};
