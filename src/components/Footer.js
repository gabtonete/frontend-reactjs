import React from 'react';
import plus from '../assets/icons/plus.svg';


export const Footer = props => {
    const {showModal} = props;

    return (
        <div className="container-footer">
            <button onClick={showModal}><img src={plus} alt="Adicionar tarefa" />Adicionar uma tarefa</button>
            <span>Fvck-rights - {new Date().getFullYear()}</span>
        </div>
    )
}