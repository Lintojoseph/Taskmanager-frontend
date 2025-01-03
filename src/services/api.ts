import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const Axios = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  