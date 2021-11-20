import { axiosbase as axios } from "./Config";


export const create = async (platform, token) => {
    try {
        const response = await axios.post("/platform", platform, {
            headers: {
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
        const response = await axios.get("/platform");
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}