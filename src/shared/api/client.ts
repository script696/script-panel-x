import axios from "axios";
import { store } from "app/store/config/store";
import { logoutThunk } from "app/store/reducers/auth/authThunk";
import { apiErrorHandler } from "shared/api/apiErrorHandler";

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
    const { dispatch } = store;
    apiErrorHandler(error, dispatch);

    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !isRetry) {
      isRetry = true;
      try {
        await $apiClient.post("auth/refresh");
        return $apiClient.request(originalRequest);
      } catch (e) {
        dispatch(logoutThunk());
      }
    }
    throw error;
  },
);
