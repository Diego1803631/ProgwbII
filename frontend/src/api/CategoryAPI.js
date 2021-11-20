import { axiosbase as axios } from "./Config";

export const create = async (category, token) => {
    try {
        const response = await axios.post("/category", category, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        console.log("success", response);
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const getall = async () => {
    try {
        const response = await axios.get("/category");
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}