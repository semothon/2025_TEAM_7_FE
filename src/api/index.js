import axios from "axios";

// 사용자 ID를 가져오는 함수
const getOrCreateUserId = () => {
  let userId = localStorage.getItem("kbn_user_id");

  if (!userId) {
    userId = crypto.randomUUID(); 
    localStorage.setItem("kbn_user_id", userId);
  }

  return userId;
};

const apiClient = axios.create({
  baseURL: "http://localhost:8085/api",
  timeout: 10000, // 10000ms, 10s
  headers: {
    "Content-Type": "application/json",
  },
});

// 모든 요청에 X-User-ID 추가
apiClient.interceptors.request.use((config) => {
  const userId = getOrCreateUserId();
  config.headers["X-User-ID"] = userId; // X-User-ID 헤더 추가
  return config;
}, (error) => Promise.reject(error));

// 응답 인터셉터: 에러 핸들링
apiClient.interceptors.response.use((response) => response, (error) => {
  console.error("API Error:", error.response?.data || error.message);
  return Promise.reject(error);
});

export default apiClient;
