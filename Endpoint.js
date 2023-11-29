import axios from "axios";

const baseURL = "https://dummyjson.com";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
