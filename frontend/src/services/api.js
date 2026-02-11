import axios from "axios";

const API = axios.create({
  baseURL : import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const predictHeart = async (data) => {
  const res = await API.post("api/heart/predict", data);
  return res.data;
};
