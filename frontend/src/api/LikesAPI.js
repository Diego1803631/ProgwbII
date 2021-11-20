import { axiosbase as axios } from "./Config";

export const create = async (like, token) => {
    try {
        const response = await axios.post("/userlikes", like, {
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
export const getbyUser = async (userId) => {
    try {
        const response = await axios.get("/userlikesUser", {
            params: {
                user: userId
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const deleteLike = async (id) => {
    try {
        const response = await axios.delete("/userlikesDelete", {
            params: {
                id: id
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}