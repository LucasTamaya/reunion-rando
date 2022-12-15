import axios from 'axios';

import { SERVER_BASE_URL } from '@/constants';
import { ProviderUserApiResponse, UserRoleApiResponse, User } from '@/types';
import { axiosInstance } from '../config/axios';

export const fetchUserRole = async () => {
  const { data } = await axiosInstance.get<UserRoleApiResponse>(
    `${SERVER_BASE_URL}/user/role`
  );
  return data;
};

export const fetchAllProviderUsers = async () => {
  const { data } = await axios.get<ProviderUserApiResponse>(
    `${SERVER_BASE_URL}/users/prestataire`
  );
  return data.providerUsers;
};

export const fetchUserData = async () => {
  const userId = localStorage.getItem('userId');

  const { data } = await axiosInstance.get<{ userData: User }>(
    `${SERVER_BASE_URL}/user/${userId}`
  );
  return data.userData;
};

export const fetchUpdateUserData = async (userData: FormData) => {
  const userId = localStorage.getItem('userId');

  const { data } = await axiosInstance.patch(
    `${SERVER_BASE_URL}/user/${userId}`,
    userData
  );

  console.log(data);

  return data;
};
