import { SERVER_BASE_URL } from "@/constants/index";
import { Hikes } from "@/types";
import { axiosInstance } from "../config/axios";

interface HikesApiResponse {
  hikes: Hikes[];
}

export const fetchAllHikes = async () => {
  const { data } = await axiosInstance.get<HikesApiResponse>(
    `${SERVER_BASE_URL}/hikes`
  );

  return data.hikes;
};
