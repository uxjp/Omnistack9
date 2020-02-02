import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.1.109:3333' // 3333 only for simulationsexp://

                      
    //192.168.1.67   // fortaleza
    
});

export default api;