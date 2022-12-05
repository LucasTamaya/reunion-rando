import axios from "axios";

import { SERVER_BASE_URL } from "@/constants";
import { ProviderUserApiResponse } from "@/types";
import { axiosInstance } from "../config/axios";

interface UserRoleApiResponse {
  role: "particulier" | "prestataire";
}
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
