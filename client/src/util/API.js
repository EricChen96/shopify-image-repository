import axios from "axios";

const API = {
    getUser: () => {
        return axios.get("/api/user");
    },

    // sign up a user to our service
    signUpUser: ({ username, password}) => {
        return axios.post("/api/signup", {
            username,
            password
        });
    },
    postImage: (imageObject) => {
        return axios.post(`/api/user/image`, imageObject);
    },

    getPublicImages: () => {
        return axios.get("/api/publicImages");
    },

    getPrivateImages: () => {
        return axios.get('/api/user/images');
    },

    deleteImage: (imageID) => {
        return axios.delete(`/api/user/images/${imageID}`)
    },

    deleteAllImages: () => {
        return axios.delete(`/api/user/images`);
    }
}

export default API;