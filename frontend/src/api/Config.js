import axios from "axios";

export const axiosbase = axios.create({
    baseURL: "http://localhost:5000/api"
});