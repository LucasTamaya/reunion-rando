import { ClipLoader } from "react-spinners";

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
  return (
    <button
      className={`${
        color === "green" ? "bg-main-green" : "bg-main-grey"
      } w-full text-white text-sm sm:text-lg flex justify-center items-center font-semibold rounded h-10 sm:h-14`}
      type="submit"
      onClick={handleClick}
    >
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
