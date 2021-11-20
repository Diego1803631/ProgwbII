import { axiosbase as axios } from "./Config";

export const create = async (review, token) => {
    try {
        const response = await axios.post("/review", review, {
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
export const getReviewbyMovie = async (id) => {
    try {
        const response = await axios.get("reviewbyMovie", {
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
export const review_update = async (id, comment) => {
    try {
        const response = await axios.put("/reviewUpdate", {}, {
            params: {
                id: id,
                comment: comment
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}