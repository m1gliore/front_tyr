import {publicRequest, userRequest} from "./requestMethods";

const getMethod = async (url, set) => {
    try {
        const response = await publicRequest.get(url)
        set.map((item) => item(response.data))
    } catch (e) {
        alert(e)
    }
}

const postMethod = async (event, url, myJson) => {
    event.preventDefault()
    try {
        await userRequest.post(url, myJson)
    } catch (e) {
        alert(e)
    }
}

const deleteMethod = async (event, url, myJson) => {
    event.preventDefault()
    try {
        await userRequest.delete(url, myJson)
    } catch (e) {
        alert(e)
    }
}

const putMethod = async (event, url, myJson) => {
    event.preventDefault()
    try {
        await userRequest.put(url, myJson)
    } catch (e) {
        alert(e)
    }
}

export {getMethod, postMethod, deleteMethod, putMethod}