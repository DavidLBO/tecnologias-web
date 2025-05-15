import Rodape from '../components/Rodape'
import Conteudo from '../components/Conteudo'
import Icone from '../components/Icone'
import Titulo from '../components/Titulo'
import Link from '../components/Link'
import InputEmail from '../components/InputEmail'
import InputSenha from '../components/InputSenha'
import Botao from '../components/Botao'

import './Login.css'

function Login() {
    return(
        <>
        <Conteudo estilo="login-container">
            <Icone imagem="https://www.svgrepo.com/show/411955/learn.svg" texto="Logo da Aplicação"/>
            <Titulo texto="Aluno Online" />
            <form action="#" method="post">
                <InputEmail />
                <InputSenha />
                <Botao texto="Entrar"/>
                <Link texto="Esqueceu a Senha?"/>
            </form>
        </Conteudo>
        <Rodape texto="Copyright (C) 2024"/>
        </>
    );
}

export default Login;