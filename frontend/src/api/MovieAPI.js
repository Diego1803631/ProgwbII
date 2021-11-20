import { axiosbase as axios } from "./Config";

export const create = async (movie, token) => {
    try {
        const response = await axios.post("/movie", movie, {
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
export const getallScore = async () => {
    try {
        const response = await axios.get("/movieScore");
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const getallName = async () => {
    try {
        const response = await axios.get("/movieName");
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const getallDate = async () => {
    try {
        const response = await axios.get("/movieDate");
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const getbyId = async () => {
    try {
        const response = await axios.get("/movie/:id");
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const getbyTitle = async (nombreBuscado) => {
    try {
        const response = await axios.get("/movieTitle", {
            params: {
                title: nombreBuscado
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const getbySpecificTitle = async (nombreBuscado) => {
    try {
        const response = await axios.get("/movieSpecificTitle", {
            params: {
                title: nombreBuscado
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const updateScore = async (id, score) => {
    try {
        const response = await axios.put("/movieUpdateScore", {}, {
            params: {
                id: id,
                score: score
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const moviebyCategory = async (category) => {
    try {
        const response = await axios.get("/moviebyCategory", {
            params: {
                category: category
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return error;
    }
}