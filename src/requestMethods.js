import axios from "axios";

export const userRequest = axios.create({
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user"))?.token}`,

    }
})