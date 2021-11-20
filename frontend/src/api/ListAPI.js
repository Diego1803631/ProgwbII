import { axiosbase as axios } from "./Config";

export const create = async (list, token) => {
    try {
        const response = await axios.post("/list", list, {
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
export const getListbyUser = async (user) => {
    try {
        const response = await axios.get("/listbyUser", {
            params: {
                id: user
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const getListbyID = async (id) => {
    try {
        const response = await axios.get("/list/:id", {
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
export const updateList = async (id, movie) => {
    try {
        const response = await axios.put("/listUpdate", {}, {
            params: {
                id: id,
                movie: movie
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const updateListMovie = async (id, idMovie) => {
    try {
        const response = await axios.put("/listRemove", {}, {
            params: {
                id: id,
                idMovie: idMovie
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}