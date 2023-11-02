import axios from "axios";

export const url = axios.create({
  baseURL: "http://localhost:8000/api",
});