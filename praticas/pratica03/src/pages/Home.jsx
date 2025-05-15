import Conteudo from '../components/Conteudo'
import Cabecalho from '../components/Cabecalho'
import Menu from '../components/Menu'
import Secao from '../components/Secao'
import Painel from '../components/Painel'

import './Home.css'

function Home() {
    return(
        <>
            <Cabecalho></Cabecalho>
            <Conteudo>
                <Menu />
                <Secao texto="Página Inicial">
                    <div id='card-grid'>
                    <Painel 
                        texto="Mural de Avisos" 
                        itens={[
                            "Inscrições para Cursos de Extensão",
                            "Evento Maratona de Programação",
                            "Palestra sobre Inteligência Artificial"
                        ]} 
                    />
                    <Painel
                        texto="Agenda Acadêmica"
                        itens={[
                            "Semana de Provas P1",
                            "Entrega de Trabalhos",
                            "Apresentação de TCC"
                        ]}
                    />
                    <Painel 
                        texto="Histórico de Notas" 
                        itens={[
                            "Lógica de Programação - 5,5",
                            "Banco de Dados - 7,8",
                            "Engenharia de Software - 5,3"
                        ]}
                    />
                    <Painel 
                        texto="Histórico de Faltas"
                        itens={[
                            "Lógica de Programação - 6",
                            "Banco de Dados - 0",
                            "Engenharia de Software - 3"
                        ]}
                    />
                    </div>
                </Secao>
            </Conteudo>
        </>
    );
}

export default Home;