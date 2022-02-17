import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Filtros } from '../components/Filtros';
import { Listagem } from '../components/Listagem';
import { Footer } from '../components/Footer';
import { executaRequisicao } from '../services/api';


export const Home = props => {

    const [tarefas, setTarefas] = useState([]);

    const getTarefasComFiltro = async () => {
        try{
            const resultado = await executaRequisicao('tarefa','GET');
            if (resultado && resultado.data){
                setTarefas(resultado.data);
            }
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        getTarefasComFiltro()
    }, []);

    const sair = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('usuarioEmail');
        props.setAccessToken('');
    }

    return (
        <>
            <Header sair={sair} />
            <Filtros />
            <Listagem tarefas={tarefas} />
            <Footer />
        </>
    )
}