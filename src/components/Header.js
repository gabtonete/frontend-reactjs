import React from 'react';
import exit from '../assets/icons/exit.svg';
import exitdesktop from '../assets/icons/exitdesktop.svg';
import logo from '../assets/icons/devaria-logo.svg';


export const Header = props => {

    const {showModal} = props;


    const nomeCompleto = localStorage.getItem('usuarioNome');
    const primeiroNome = nomeCompleto?.split(' ')[0] || '';

    return (
        <div className="container-header">
            <img src={logo} className="logo" alt="Logo Devaria" />
            <button onClick={showModal}><span>+</span> Adicionar Tarefa</button>
 
            <div className="desktop">
                <span>Olá, {primeiroNome}</span>
                <img src={exitdesktop} className="exit" alt="Botão de sair" onClick={props.sair}/>
            </div>

            <div className="mobile">
                <span>Olá, {primeiroNome}</span>
                <img src={exit} className="exit" alt="Botão de sair" onClick={props.sair}/>
            </div>
        </div>
    )
}