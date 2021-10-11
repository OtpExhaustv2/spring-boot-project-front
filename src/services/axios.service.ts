import axios, {AxiosRequestConfig} from 'axios';

export default axios.create({
    withCredentials: true
} as AxiosRequestConfig);