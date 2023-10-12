import axios from "axios";
import { baseURL } from "../config";

export const api = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});
