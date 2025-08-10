import axios from "axios";

const API_URL = "https://api.github.com/users";

export const getUser = async (username) => {
    const response = await axios.get('${API_URL}$(username)', {
        headers: {
            Authorization: 'token ${import.meta.env.VITE_APP_GITHUB_API_KEY}',
        },
    });
    return response.data;
};