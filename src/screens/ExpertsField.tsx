import { ClipLoader } from "react-spinners";

import { Nav } from "@/components/common/nav/Nav";
import { useProviderUsers } from "@/hooks/user/useProviderUsers";
import { UserProviderCard } from "@/components/user/provider/UserProviderCard";

export const ExpertsField: React.FC = () => {
  const { isLoading, data } = useProviderUsers();

  return (
    <div>
      <Nav />
      <h1 className="text-6xl text-main-green text-center font-semibold my-16">
        Nos experts du terrain
      </h1>

      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
        </div>
      ) : null}

      {data ? (
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10">
          {data.map(({ ...props }) => (
            <UserProviderCard {...props} key={props.id} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
