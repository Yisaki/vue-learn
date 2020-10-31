import axios from 'axios'

function request(config) {
    const instance = axios.create({
       // baseURL: 'https://api.apiopen.top/getJoke?page=1&count=2&type=video',
        timeout: 5000
    });

    return instance(config);
};

export default request;
