import axios from 'axios';

import { SERVER_BASE_URL } from '@/constants';
import { Activities } from '@/types';
import { axiosInstance } from '../config/axios';

export const fetchAddActivity = async (activityData: FormData) => {
  const { data } = await axiosInstance.post(
    `${SERVER_BASE_URL}/activity`,
    activityData
  );
  return data;
};

export const fetchAllActivities = async () => {
  const { data } = await axios.get<Activities>(`${SERVER_BASE_URL}/activities`);
  return data.activities;
};

export const fetchAllProviderActivities = async () => {
  const userId = localStorage.getItem('userId');

  const { data } = await axiosInstance.get<Activities>(
    `${SERVER_BASE_URL}/activities/${userId}`
  );

  return data.activities;
};

export const fetchDeleteActivity = async (
  activityId: string,
  cloudinaryPublicId: string
) => {
  const { data } = await axiosInstance.delete<{ activityId: string }>(
    `${SERVER_BASE_URL}/activity/${activityId}`,
    { data: { cloudinaryPublicId } }
  );
  return data.activityId;
};

export const fetchUpdateActivity = async (activityData: FormData) => {
  const activityId = activityData.get('activityId');
  // before we make the request, we delete the activityId value from the FormData
  // because we dont' need it when updating the activity
  // we just need it to make the request
  activityData.delete('activityId');

  const { data } = await axiosInstance.patch(
    `${SERVER_BASE_URL}/activity/${activityId}`,
    activityData
  );

  return data;
};
