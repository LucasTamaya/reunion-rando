import { ClipLoader } from "react-spinners";
import classnames from "classnames";

interface Props {
  text: string;
  color: "green" | "grey";
  isLoading?: boolean;
  handleClick?: () => any;
}

export const Button: React.FC<Props> = ({
  text,
  color,
  isLoading,
  handleClick,
}) => {
  // Define the class names for the button based on the color prop
  const className = classnames(
    "w-full text-white text-sm sm:text-lg",
    "flex justify-center items-center font-semibold rounded h-10 sm:h-14",
    {
      "bg-main-green": color === "green",
      "bg-main-grey": color === "grey",
    }
  );

  return (
    <button className={className} type="submit" onClick={handleClick}>
      {isLoading ? (
        <ClipLoader
          size={25}
          speedMultiplier={0.9}
          color="#fff"
          data-testid="loader"
        />
      ) : (
        <>{text}</>
      )}
    </button>
  );
};
