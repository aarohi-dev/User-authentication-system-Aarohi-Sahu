import axios from "axios";

const API_URL = "http://localhost:5000/api"; 

export const login = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
export const signup = (userData) => axios.post(`${API_URL}/auth/signup`, userData);
export const updateProfile = (data, token) =>
  axios.put(`${API_URL}/user/profile`, data, {
    headers: { Authorization: `Bearer ${token}` }
  });
