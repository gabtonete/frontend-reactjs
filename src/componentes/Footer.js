import React, { useState } from 'react';
import adicionar from '../assets/icones/adicionar.svg';
import github from '../assets/icones/github-original.svg';
import info from '../assets/icones/info.svg';
import { Modal } from 'react-bootstrap';

export const Footer = props => {
    const { showModal } = props;
    const [mostraModal, setMostraModal] = useState(false);


    return (
        <div className="container-footer">
            {localStorage.getItem('accessToken')
                ?
                <>
                    <button className="adicionarMobile" onClick={showModal}>
                        <img src={adicionar} alt="Adicionar tarefa" />Adicionar tarefa
                    </button>
                    <div className="footerDesktop">
                        <a href="https://github.com/gabtonete/frontend-task-reactjs" target="_blank">
                            <img src={github} alt="Acesse o github do projeto" />
                        </a>
                        <a onClick={() => setMostraModal(true)}>
                            <img src={info} alt="Informações de dados do projeto" />
                        </a>
                    </div>
                    <span className="spanDesktop">github/gabtonete - <b>USE DADOS FICTÍCIOS.</b></span>
                </>
                :
                <>
                    <div className="footerDeslogado">
                        <a href="https://github.com/gabtonete/frontend-task-reactjs" target="_blank">
                            <img src={github} alt="Acesse o github do projeto" />
                        </a>
                        <a onClick={() => setMostraModal(true)}>
                            <img src={info} alt="Informações de dados do projeto" />
                        </a>
                    </div>
                    <span className="spanDeslogado">github/gabtonete - <b>USE DADOS FICTÍCIOS.</b></span>
                </>
            }
            <Modal show={mostraModal} onHide={() => setMostraModal(false)} className="container-modal">
                <Modal.Body>
                    <p>Por se tratar de um app em estado de desenvolvimento, todos os dados inseridos na plataforma serão apagados do banco de dados ao deslogar.
                        <br />
                        <br />Para mais informações acesse o repositório do github.
                    </p>
                </Modal.Body>
            </Modal>
        </div>
    )
}