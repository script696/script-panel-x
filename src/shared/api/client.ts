import axios from "axios";
import { store } from "../../app/providers/StoreProvider/config/store";
import { logoutThunk } from "../../app/providers/StoreProvider/reducers/auth/authThunk";

const baseURL = process.env["REACT_APP_API_URL"];

if (typeof baseURL !== "string" || !baseURL) {
  throw new Error("Required environment variable `API_URL` not defined!");
}

export const $apiClient = axios.create({
  baseURL: `${baseURL}/api`,
  withCredentials: true,
});

let isRetry = false;

$apiClient.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !isRetry) {
      const { dispatch } = store;

      isRetry = true;
      try {
        await $apiClient.post("auth/refresh");
        return $apiClient.request(originalRequest);
      } catch (e) {
        dispatch(logoutThunk());
      }
    }
    throw error;
  }
);
