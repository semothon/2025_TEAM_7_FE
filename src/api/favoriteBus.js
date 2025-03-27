/* eslint-disable no-useless-catch */
import apiClient from "./index";

// 즐겨찾기 버스 추가하기
export const addFavoriteBus = async (favorite) => {
  try {
    const response = await apiClient.post("/favorite-bus/add-favorite-bus", favorite);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 즐겨찾기 버스 목록 가져오기
export const getFavoriteBuses = async () => {
  try {
    const response = await apiClient.get("/favorite-bus/get-my-favorite-buses");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 즐겨찾기한 버스의 도착 예정 정보 리스트로 가져오기기
export const getLeftTimeOfFavoriteBuses = async () => {
  try {
    const response = await apiClient.get("/favorite-bus/get-left-time-of-my-favorite-buses");
    return response.data;
  } catch (error) {
    throw error;
  }
};


