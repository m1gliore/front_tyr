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

const postMethod = async (event, navigate, url, myJson) => {
    event.preventDefault()
    try {
        await userRequest.post(url, myJson).then(() => navigate(0))
    } catch (e) {
        console.log(e)
    }
}

// const deleteMethod = async (event, arr, idArr) => {
//     try {
//         event.preventDefault()
//         const id = event.target.id.value
//         const idItem = arr[id].idArr
//         const myJson = {
//             idItem
//         }
//         await axios.delete('', myJson)
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// const postMethod = async (event, data) => {
//     try {
//         event.preventDefault()
//         const title = event.target.title.value
//         const myJson = data
//         console.log(myJson)
//         await axios.post('http://localhost:8040/api/homePage/saveNewImageInGallery', myJson)
//     } catch (e) {
//         console.log(e)
//     }
// }

export {getMethod, postMethod}