import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:8080" });

export const login = (username, password) =>
  api.post("/auth/login", { username, password });

export const register = (username, password) =>
  api.post("/auth/register", { username, password });
