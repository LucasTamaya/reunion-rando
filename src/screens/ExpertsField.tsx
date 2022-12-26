import { ClipLoader } from 'react-spinners';

import { Nav } from '@/components/common/nav/Nav';
import { useProviderUsers } from '@/hooks/user/useProviderUsers';
import { UserProviderCard } from '@/components/user/provider/UserProviderCard';
import HelmetSeo from '@/components/common/HelmetSeo';

export const ExpertsField: React.FC = () => {
  const { isLoading, data } = useProviderUsers();

  return (
    <>
      <HelmetSeo
        title="RunRando - Nos experts du terrain"
        description="Notre équipe d'experts du terrain est composée de professionnels ou de passionnés de la randonnée. N'hésitez pas à les contacter pour votre prochaine sortie !"
        path="/nos-experts-du-terrain"
      />
      <Nav />
      <h1 className="text-2xl sm:text-6xl text-main-green text-center font-semibold my-10 sm:my-16">
        Nos experts du terrain
      </h1>

      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <ClipLoader
            size={25}
            speedMultiplier={0.9}
            color="#128B2D"
            data-testid="loader"
          />
        </div>
      ) : null}

      {data ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 px-5 pb-5">
          {data.map(({ ...props }) => (
            <UserProviderCard {...props} key={props.id} />
          ))}
        </div>
      ) : null}
    </>
  );
};
