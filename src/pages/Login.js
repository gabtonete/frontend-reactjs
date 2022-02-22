import React, { useState } from 'react';
import logo from '../assets/icones/devaria-logo.svg';
import mail from '../assets/icones/mail.svg';
import lock from '../assets/icones/lock.svg';
import { Input } from '../componentes/Input';
import { executaRequisicao } from '../services/api';
import { Modal } from 'react-bootstrap';

export const Login = props => {


    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [msgErro, setMsgErro] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [nome, setNome] = useState('')
    const [emailUsuario, setEmailUsuario] = useState('')
    const [senhaUsuario, setSenhaUsuario] = useState('')

    const executaLogin = async evento => {
        try {
            evento.preventDefault();
            setLoading(true);
            setMsgErro('');
            setSuccess('');


            const body = {
                login,
                senha,
            };

            const resultado = await executaRequisicao("login", "POST", body);
            if (resultado?.data?.token) {
                localStorage.setItem("accessToken", resultado.data.token);
                localStorage.setItem("usuarioNome", resultado.data.nome);
                localStorage.setItem("usuarioEmail", resultado.data.email);
                props.setAccessToken(resultado.data.token);
            }
        } catch (e) {
            console.log(e);
            if (e?.response?.data?.erro) {
                setMsgErro(e.response.data.erro);
            } else {
                setMsgErro('Não foi possível efetuar o login, fale com o administrador.')
            }
        }

        setLoading(false);
    }
    const cadastrarUsuario = async evento => {
        try {
            setSuccess('');
            setMsgErro('');

            const body = {
                nome,
                emailUsuario,
                senhaUsuario
            }

            const resultado = await executaRequisicao("usuario", "POST", body);

            if(resultado?.data?.msg){
                setSuccess(resultado.data.msg)
            }
            setShowModal(false);
        }catch(e) {
            console.log(e);
            if (e?.response?.data?.erro) {
                setMsgErro("Cadastro inválido");
                setShowModal(false);
            } else {
                setMsgErro('Não foi possível cadastrar, fale com o administrador.')
                setShowModal(false);
            }
        }

        setNome('');
        setEmailUsuario('');
        setSenhaUsuario('');
    }

    return (
        <div className="container-login" >
            <img src={logo}
                alt="Logo Devaria"
                className="logo"
            />
            <form>
                {msgErro && <p className="error"> {msgErro} </p>}
                {success && <p className="success">{success}</p>}
                <Input
                    srcImg={mail}
                    altImg={"Icone email"}
                    inputType="text"
                    inputName="login"
                    inputPlaceholder="Informe seu email"
                    value={login}
                    setValue={setLogin}
                />
                <Input
                    srcImg={lock}
                    altImg={"Icone senha"}
                    inputType="password"
                    inputName="senha"
                    inputPlaceholder="Informe sua senha"
                    value={senha}
                    setValue={setSenha}
                />
                <button onClick={executaLogin}
                    disabled={isLoading} > {isLoading === true ? '...Carregando' : 'Entrar'}
                </button>
                <div className="signup" onClick={() => setShowModal(true)}>
                    Cadastre-se
                </div>
            </form>
            <Footer />
                <Modal show={showModal} onHide={() => setShowModal(false)} className="container-modal">
                    <Modal.Body>
                        <p>Cadastre-se</p>
                        <input type="text" name="Nome"
                            placeholder="Insira o nome"
                            className="col-12"
                            value={nome}
                            onChange={evento => setNome(evento.target.value)} 
                        />
                        <input type="text" name="loginUsuario"
                            placeholder="Insira o email"
                            className="col-12"
                            value={emailUsuario}
                            onChange={evento => setEmailUsuario(evento.target.value)} 
                        />
                        <input type="password" name="senhaUsuario"
                            placeholder="Insira a senha"
                            className="col-12"
                            value={senhaUsuario}
                            onChange={evento => setSenhaUsuario(evento.target.value)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="buttons col-12">
                            <button onClick={cadastrarUsuario}>Cadastrar</button>
                        </div>
                    </Modal.Footer>
                </Modal>
        </div>
    );
}