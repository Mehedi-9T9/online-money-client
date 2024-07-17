import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,

});

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;