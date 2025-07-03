import axios from "axios";

const axios_secure = axios.create({
    baseURL: "http://localhost:4300/"
})
const useAxiosSecure = () => {
    return axios_secure;
};

export default useAxiosSecure;