import { SERVER_BASE_URL } from "@/constants";
import { UserRoles } from "@/types";
import { axiosInstance } from "../config/axios";

export const fetchUserRole = async () => {
  const { data } = await axiosInstance.get<UserRoles>(
    `${SERVER_BASE_URL}/user/role`
  );

  return data;
};
