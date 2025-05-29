import axios from "axios";

const url = import.meta.env.VITE_API_URL

function buscarTodos()  {
    return axios.get(url).then((response) => {
        return { sucesso: true, dados: response.data};
    }).catch((error) => {
        return {sucesso: false, mensagem: `Ocorreu um erro: ${error.message}`};
    });
};

function buscarPorId(id) {
    return axios.get(`${url}/${id}`).then((response) => {
        return { sucesso: true, dados: response.data};
    }).catch((error) => {
        return {sucesso: false, mensagem: `Ocorreu um erro: ${error.message}`};
    });
};

function adicionar(contato) {
    return axios.post(url, contato).then((response) => {
        return { sucesso: true, dados: response.data};
    }).catch((error) => {
        return {sucesso: false, mensagem: `Ocorreu um erro: ${error.message}`};
    });
};

function modificar(id, contato) {
    return axios.put(`${url}/${id}`, contato).then((response) => {
        return { sucesso: true, dados: response.data};
    }).catch((error) => {
        return {sucesso: false, mensagem: `Ocorreu um erro: ${error.message}`};
    });
};

function remover(id) {
    return axios.delete(`${url}/${id}`).then((response) => {
        return { sucesso: true, dados: response.data};
    }).catch((error) => {
        return {sucesso: false, mensagem: `Ocorreu um erro: ${error.message}`};
    });
};  

export {buscarTodos, buscarPorId, adicionar, modificar, remover};