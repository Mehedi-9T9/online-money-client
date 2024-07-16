import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,

});

const UseAxiosPublic = () => {
    return instance


};

export default UseAxiosPublic;