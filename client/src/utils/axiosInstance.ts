import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://interview-ai-backend-jpck.onrender.com/api",
  withCredentials: true, // if you need cookies
});

// You can add interceptors here if needed
export default axiosInstance;
