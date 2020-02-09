import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://54.185.46.167/api/'
});

export default instance;