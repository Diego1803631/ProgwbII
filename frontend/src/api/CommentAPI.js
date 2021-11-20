import { axiosbase as axios } from "./Config";

export const create = async (comment, token) => {
    try {
        const response = await axios.post("/comment", comment, {
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
export const getLast = async () => {
    try {
        const response = await axios.get("/commentLastID");
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}