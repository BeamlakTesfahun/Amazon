import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5001/fir-85876/us-central1/api",
  //baseURL: "https://api-yfrtdez4ia-uc.a.run.app",
});

export { axiosInstance };
