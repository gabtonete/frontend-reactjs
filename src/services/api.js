import axios from 'axios';


const API_URL = 'https://apirestgabrielt.herokuapp.com/api/';
const instance = axios.create({
    baseURL: API_URL,
    timeout: 30000
});

export const executaRequisicao = (endpoint, method, body) => {
    console.log(`executando: ${API_URL}${endpoint}, método: ${method}, body: ${body}`)

    return instance.request({
        url: endpoint,
        method: method,
        data: body? body: ''
    })
}