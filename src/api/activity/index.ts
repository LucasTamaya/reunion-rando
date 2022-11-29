import { SERVER_BASE_URL } from "@/constants";
import { NewActivityValues } from "@/types";
import { axiosInstance } from "../config/axios";

export const fetchAddActivity = async ({
  ...activityData
}: NewActivityValues) => {
  const { data } = await axiosInstance.post(`${SERVER_BASE_URL}/activity`, {
    ...activityData,
  });

  console.log(data);

  return data;
};
