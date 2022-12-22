import { QueryClient } from '@tanstack/react-query';

import { Activity } from '@/types';

export const refreshActivitiesData = (
  activityId: string,
  queryKey: string,
  queryClient: QueryClient
) => {
  // access the previous data of the query that has the given queryKey'
  // and filter the array to delete the the activity with the given activityId
  queryClient.setQueryData([queryKey], (prev: any) => {
    const updatedActivities = prev.filter(
      (activity: Activity) => activity.id !== activityId
    );
    return updatedActivities;
  });
};
