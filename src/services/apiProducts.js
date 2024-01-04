import  axios from "axios";

export function getAllProducts() {
    return axios.get(`https://dummyjson.com/products?limit=${limit}`);
}
export function getSinglePrroducts (id = 1) {
    return axios.get(`https://dummyjson.com/products/${id}`);
}