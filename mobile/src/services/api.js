import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.67:3333' // 3333 only for simulations
});

export default api