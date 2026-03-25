import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // if you need cookies
});

// You can add interceptors here if needed
export default axiosInstance;
