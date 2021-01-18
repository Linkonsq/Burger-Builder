import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-e3670-default-rtdb.firebaseio.com/'
});

export default instance;