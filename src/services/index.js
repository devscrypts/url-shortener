import axios from "axios";

const baseUrl = "https://api.shrtco.de/v2/";

const shortenLinks = async (value) => {
    try {
        const {data} = await axios.get(`${baseUrl}shorten?url=${value}`);
        return data;
    } catch (err) {
        alert(err);
    }
};

export default {shortenLinks};
