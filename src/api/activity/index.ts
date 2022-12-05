import axios from "axios";

import { SERVER_BASE_URL } from "@/constants";
import { Activities } from "@/types";
import { axiosInstance } from "../config/axios";

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
