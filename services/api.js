import axios from 'axios'
import Global from '../global/global';

const api = axios.create({
    baseURL: Global.urlSus
})

export default api;