import axios from "axios";

const BASE_URL = "http://localhost:8034/api/"
const TOKEN = "tokenTest"

export const publicRequest = axios.create({baseURL: BASE_URL})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})