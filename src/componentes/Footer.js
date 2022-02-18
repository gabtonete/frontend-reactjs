import React from 'react';
import adicionar from '../assets/icones/adicionar.svg';

export const Footer = props => {
    const {showModal} = props;
    return (
        <div className="container-footer">
            <button onClick={showModal}><img src={adicionar} alt="Adicionar tarefa" />Adicionar tarefa</button>
            <span>{new Date().getFullYear()} Fvck Rights.</span>
        </div>
    )
}