import axios from "axios";
import "dotenv/config";

const api = axios.create({
  //baseURL: `https://v6.exchangerate-api.com/v6/${process.env.KEY_API}`,
  baseURL: "https://api.exchangeratesapi.io",
});

export default api;
