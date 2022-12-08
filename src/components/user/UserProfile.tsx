import { ClipLoader } from "react-spinners";

import { Nav } from "../common/nav/Nav";
import { useUserData } from "../../hooks/user/useUserData";

export const UserProfile: React.FC = () => {
  const { isLoading, data } = useUserData();

  return (
    <div>
      <Nav />
      <h1 className="text-6xl text-main-green text-center font-semibold my-16">
        Profile
      </h1>
      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
        </div>
      ) : null}

      {data ? (
        <div className="flex flex-col gap-y-3 justify-center items-center">
          {data.avatar ? (
            <img src={data.avatar} alt="avatar prestataire" />
          ) : (
            <div className="w-24 h-24 rounded-full bg-blue-500"></div>
          )}
          <div className="flex items-center">
            <h2 className="text-lg font-semibold mr-1">Nom: </h2>
            <p>{data.lastname}</p>
          </div>
          <div className="flex items-center">
            <h2 className="text-lg font-semibold mr-1">Prénom: </h2>
            <p>{data.firstname}</p>
          </div>
          <div className="flex items-center">
            <h2 className="text-lg font-semibold mr-1">E-mail: </h2>
            <p>{data.email}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
