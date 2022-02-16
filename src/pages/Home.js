import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Filtros } from '../components/Filtros';
import { Listagem } from '../components/Listagem';
import { Footer } from '../components/Footer';

export const Home = props => {

    const [tarefas, setTarefas] = useState([{
        id: '12345',
        nome: 'Tarefa mock1',
        dataPrevisaoConclusao: '2021-21-12',
        dataConclusao: null
    },
    {
        id: '135135',
        nome: 'Tarefa mock2',
        dataPrevisaoConclusao: '2021-21-12',
        dataConclusao: '2022-21-12'
    }
    ]);

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