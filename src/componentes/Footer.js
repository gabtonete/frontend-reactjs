import React from 'react';
import adicionar from '../assets/icones/adicionar.svg';

export const Footer = props => {
    const {showModal} = props;
    return (
        <div className="container-footer">
            <button className={localStorage.getItem('accessToken') ? "buttonHome" : "buttonLogin"} onClick={showModal}><img src={adicionar} alt="Adicionar tarefa" />Adicionar tarefa</button>
            <span className={localStorage.getItem('accessToken') ? "spanHome" : "spanLogin"}>{new Date().getFullYear()} Fvck Rights. <b>USE DADOS FICTÍCIOS.</b></span>
        </div>
    )
}