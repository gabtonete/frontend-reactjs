import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://apirestgabrielt.herokuapp.com/api/',
    timeout: 30000
});

export const executaRequisicao = (endpoint, method, body) => {
    
    const accessToken = localStorage.getItem('accessToken');

    let headers = { 'Content-Type' : 'application/json'};
    if(accessToken) {
        headers['Authorization'] = 'Bearer ' + accessToken;
    }
    
    console.log(`executando: ${endpoint}, método: ${method}, body: ${body}, headers ${headers}`)

    return instance.request({
        url: endpoint,
        method: method,
        data: body? body: '',
        headers: headers
    })
}