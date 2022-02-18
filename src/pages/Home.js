import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

import { Header } from '../components/Header';
import { Filtros } from '../components/Filtros';
import { Listagem } from '../components/Listagem';
import { Footer } from '../components/Footer';
import { executaRequisicao } from '../services/api';


export const Home = props => {

    const [tarefas, setTarefas] = useState([]);
    const [periodoDe, setPeriodoDe] = useState('');
    const [periodoAte, setPeriodoAte] = useState('');
    const [status, setStatus] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const getTarefasComFiltro = async () => {
        try {

            let filtros = '?status=' + status
            if (periodoDe) {
                filtros += '&periodoDe=' + periodoDe;
            }
            if (periodoAte) {
                filtros += '&periodoAte=' + periodoAte;

            }

            const resultado = await executaRequisicao('tarefa' + filtros, 'get');
            if (resultado && resultado.data) {
                setTarefas(resultado.data);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getTarefasComFiltro()
    }, [status, periodoDe, periodoAte]);

    const sair = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('usuarioEmail');
        props.setAccessToken('');
    }

    return (
        <>
            <Header sair={sair} />
            <Filtros
                periodoDe={periodoDe}
                periodoAte={periodoAte}
                status={status}
                setPeriodoDe={setPeriodoDe}
                setPeriodoAte={setPeriodoAte}
                setStatus={setStatus}
            />
            <Listagem tarefas={tarefas} />
            <Footer showModal={ () => setShowModal(true)}/>
            <Modal>
                <Modal.Body show={showModal} onHide={toggleModal}>
                    <p>Adicionar uma tarefa</p>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    )
}