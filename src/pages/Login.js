import React from 'react';
import logoDevaria from '../assets/icons/devaria-logo.svg'

export const Login = () => {
    return (
        <div>
            <img
                src={logoDevaria}
                alt="Logo da Devaria"
            />
            <form>
                <input type="text" name="login" placeholder="Informe seu email" />
                <input type="password" name="senha" placeholder="Informe sua senha" />
                <button>Entrar</button>
            </form>
        </div>
    );
}