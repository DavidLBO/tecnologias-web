import Conteudo from '../components/Conteudo'
import Cabecalho from '../components/Cabecalho'
import Menu from '../components/Menu'
import Secao from '../components/Secao'
import InputNome from '../components/InputNome'
import InputEmail from '../components/InputEmail'
import InputSenha from '../components/InputSenha'
import Botao from '../components/Botao'

function Perfil() {
    return(
        <>
            <Cabecalho></Cabecalho>
            <Conteudo>
                <Menu />
                <Secao texto="Perfil do Aluno">
                <form action="#" method="post">
                    <InputNome />
                    <InputEmail />
                    <InputSenha />
                    <Botao texto="Salvar"/>
                </form>
                </Secao>
            </Conteudo>
        </>
    );
}

export default Perfil;