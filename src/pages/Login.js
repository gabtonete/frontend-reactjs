import React, { useState } from 'react';
import logoDevaria from '../assets/icons/devaria-logo.png';
import mail from '../assets/icons/mail.svg';
import lock from '../assets/icons/lock.svg';
import { executaRequisicao } from '../services/api';


export const Login = props => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [msgErro, setMsgErro] = useState('');
    const [isLoading, setLoading] = useState(false);

    const executaLogin = async evento => {
        try {
            evento.preventDefault();
            setLoading(true);
            setMsgErro('');

            const body = {
                login, senha
            }

            const resultado = await executaRequisicao('login', 'POST', body);
            if (resultado?.data?.token) {
                localStorage.setItem('accessToken', resultado.data.token);
                localStorage.setItem('usuarioNome', resultado.data.nome);
                localStorage.setItem('usuarioEmail', resultado.data.email);

                props.setAccessToken(resultado.data.token);
            };
        } catch (e) {
            console.log(e);
            if (e?.response?.data?.erro) {
                setMsgErro(e.response.data.erro);
            } else {
                setMsgErro('Não foi possível efetuar o login, tente novamente')
            }

        }

        setLoading(false);

    }
    return (
        <div className="container-login">
            <img
                src={logoDevaria}
                alt="Logo da Devaria"
                className="logo"
            />
            <form>
                {msgErro && <p>{msgErro}</p>}
                <div className="input">
                    <img src={mail} alt="login" />
                    <input type='text' name='login' placeholder='Digite seu login'
                        value={login} onChange={evento => setLogin(evento.target.value)} />
                </div>
                <div className="input">
                    <img src={lock} alt="senha" />
                    <input type='password' name='senha' placeholder='Digite sua senha'
                        value={senha} onChange={evento => setSenha(evento.target.value)} />
                </div>
                <button onClick={executaLogin} disabled={isLoading}>{isLoading === true ? 'Carregando' : 'Entrar'}</button>
            </form>
        </div>
    );
}