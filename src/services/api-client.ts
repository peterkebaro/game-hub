import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'af93f1c95acc4038bcecd1802221d61d'
    }
})