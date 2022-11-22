import { RegisterValues } from "@/types";
import { SERVER_BASE_URL } from "@/constants";
import { axiosInstance } from "../config/axios";

export const fetchRegister = async ({ ...userData }: RegisterValues) => {
  const { data } = await axiosInstance.post(`${SERVER_BASE_URL}/register`, {
    ...userData,
  });

  console.log(data);
};
