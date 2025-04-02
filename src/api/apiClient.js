import axios from "axios";

// JWT Access Token을 로컬스토리지에서 꺼내는 함수
const getAccessToken = () => {
  return localStorage.getItem("loopin-jwt-access-key");
};

const apiClient = axios.create({
  baseURL:
    window.location.hostname.includes('vercel.app')
      ? 'https://your-production-domain.com/api'   // 실 배포 주소, login.vue도 수정해야함!!!!
      : 'http://localhost:1590',
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터: Authorization 헤더에 JWT 토큰 추가
apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// 응답 인터셉터: 에러 핸들링
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
