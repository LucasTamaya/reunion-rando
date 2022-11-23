import { LoginApiResponse, LoginValues } from "@/types";
import { SERVER_BASE_URL } from "@/constants";
import { axiosInstance } from "../config/axios";

export const fetchLogin = async ({ ...userData }: LoginValues) => {
  const { data } = await axiosInstance.post<LoginApiResponse>(
    `${SERVER_BASE_URL}/login`,
    {
      ...userData,
    }
  );

  return data;
};
