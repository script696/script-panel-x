import axios from "axios";

const baseURL = process.env["REACT_APP_API_URL"];

if (typeof baseURL !== "string" || !baseURL) {
  throw new Error("Required environment variable `API_URL` not defined!");
}

export const $apiClient = axios.create({
  baseURL: `${baseURL}/api`,
});
