import axios from 'axios';


const URL = window.location.origin;
const instance = axios.create({
    baseURL: URL,
    timeout: 30000
});

export const executaRequisicao = (endpoint, method, body) => {
    console.log(`executando: ${URL}${endpoint}, método: ${method}, body: ${body}`)

    return instance.request({
        url: endpoint,
        method: method,
        data: body? body: ''
    })
}