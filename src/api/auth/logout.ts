import { SERVER_BASE_URL } from "@/constants";
import { axiosInstance } from "../config/axios";

export const fetchLogout = async () => {
  const req = await axiosInstance.post(`${SERVER_BASE_URL}/logout`);
  return req;
};
