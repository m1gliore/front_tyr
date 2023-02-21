import axios from "axios";
import {userRequest} from "./requestMethods";

const getMethod = async (url, set) => {
    try {
        const response = await axios.get(url)
        set.map((item) => item(response.data))
    } catch (e) {
        console.log(e)
    }
}

const postMethod = async (event, url, myJson) => {
    event.preventDefault()
    try {
        await userRequest.post(url, myJson)
    } catch (e) {
        console.log(e)
    }
}

const deleteMethod = async (event, url, myJson) => {
    event.preventDefault()
    try {
        await userRequest.delete(url, myJson)
    } catch (e) {
        console.log(e)
    }
}

const putMethod = async (event, url, myJson) => {
    event.preventDefault()
    try {
        await userRequest.put(url, myJson)
    } catch (e) {
        console.log(e)
    }
}

export {getMethod, postMethod, deleteMethod, putMethod}