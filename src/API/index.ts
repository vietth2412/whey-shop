import axios from "axios";
const http = axios.create({
  baseURL: "https://whey-api.onrender.com/",
  timeout: 100000,
});

export const getHomePageApi = () => {
  return http.get("/public/home").then((res) => res.data);
};

export const paymentApi = (body: any) => {
  return http.post("/public/payment", body).then((res) => res.data);
};
