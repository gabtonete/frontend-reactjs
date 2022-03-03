import axios from 'axios';

const urlBase = process.env.REACT_APP_APIURL
console.log(urlBase)

const instance = axios.create({
    baseURL: urlBase,
    //baseURL: 'http://localhost:3001/api/',
    timeout: 30000
});

export const executaRequisicao = (endpoint, metodo, body) => {

    const accessToken = localStorage.getItem('accessToken');

    let headers = null;

    if (metodo === 'DELETE') {
        headers = { 'Content-Type': 'text/plain' };
    } else {
        headers = { 'Content-Type': 'application/json' };
    }

    if (accessToken) {
        headers['Authorization'] = 'Bearer ' + accessToken;
    }

    console.log(`executando: ${endpoint}, metodo ${metodo}, body ${body}, headers ${headers}`);
    return instance.request({
        url: endpoint,
        method: metodo,
        data: body ? body : '',
        headers: headers,
    });
}
