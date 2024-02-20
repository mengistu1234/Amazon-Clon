import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-e5171/us-central1/api",
  baseURL: "https://amazon-api-deploy-nqis.onrender.com/",
});

export { axiosInstance };
