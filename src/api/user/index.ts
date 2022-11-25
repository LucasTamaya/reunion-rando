import { SERVER_BASE_URL } from "@/constants";
import { axiosInstance } from "../config/axios";

interface UserRoleResponse {
  role: "particulier" | "prestataire";
}
export const fetchUserRole = async () => {
  const { data } = await axiosInstance.get<UserRoleResponse>(
    `${SERVER_BASE_URL}/user/role`
  );

  return data;
};
