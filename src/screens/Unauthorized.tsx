import { Link } from "react-router-dom";

export const Unauthorized: React.FC = () => {
  return (
    <div className="h-[80vh] max-w-3xl flex flex-col justify-center items-center mx-auto px-5">
      <h1 className="text-2xl sm:text-6xl text-main-green text-center font-semibold my-10 sm:my-16">
        Vous ne disposez pas des droits nécessaires
      </h1>
      <button className="w-full text-white text-base sm:text-lg font-semibold bg-main-green rounded p-2 sm:p-3">
        <Link className="block w-full h-full" to="/">
          Revenir à l'accueil
        </Link>
      </button>
    </div>
  );
};
