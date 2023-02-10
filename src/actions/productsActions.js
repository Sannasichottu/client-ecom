import axios from "axios"
import { productsFail, productsRequest, productsSuccess } from "../slices/productsSlice"



export const getsProducts = async (dispatch) => {
    try {
        dispatch(productsRequest())
        const { data } = await axios.get(`http://localhost:3000/api/v1/products`);
        dispatch (productsSuccess(data))
    }catch (error) {
        //handle error
        dispatch(productsFail(error.response.data.message))
    }
}