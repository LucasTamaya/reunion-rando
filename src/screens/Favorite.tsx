import { ClipLoader } from 'react-spinners';

import { ActivityCard } from '@/components/activity/ActivityCard';
import { Nav } from '@/components/common/nav/Nav';
import { useSavedActivities } from '@/hooks/activity/useSavedActivities';

export const Favorite: React.FC = () => {
  const { isLoading, data } = useSavedActivities();
  return (
    <>
      <Nav />
      <h1 className="text-6xl text-main-green text-center font-semibold my-16">
        Mes favoris
      </h1>
      {isLoading ? (
        <div className="w-full flex justify-center items-center">
          <ClipLoader size={25} speedMultiplier={0.9} color="#128B2D" />
        </div>
      ) : null}
      {data ? (
        <div className="w-full h-fit max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto px-5 pb-5">
          {data.map(({ ...props }) => (
            <ActivityCard key={props.id} {...props} />
          ))}
        </div>
      ) : null}
    </>
  );
};
