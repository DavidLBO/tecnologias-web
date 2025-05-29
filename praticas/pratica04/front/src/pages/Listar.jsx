import Listagem from "../components/Listagem";
import { useContext, useEffect, useState } from "react";
import { buscarTodos, remover } from "../services/ContatoService";
import { RotaContext } from "../contexts/RotaContext.jsx";

function Listar() {
    const [contatos, setContatos] = useState([]);
    const [erro, setErro] = useState("");
    const { setRota } = useContext(RotaContext);

    const handleModificar = (id) => {
        setRota(`/editar/${id}`);
    }

    const handleRemover = async (id) => {
        const resposta = await remover(id);
        const carregar = async () => {
            const resposta = await buscarTodos();

            if (resposta.sucesso) {
                setContatos(resposta.dados);
                setErro("");
            } else {
                setErro(resposta.mensagem);
            }
        };
        if (resposta.sucesso) {
            carregar();
        } else {
            setErro(resposta.mensagem);
        }
    }

    useEffect(() => {
        const carregar = async () => {
            const resposta = await buscarTodos();

            if (resposta.sucesso) {
                setContatos(resposta.dados);
                setErro("");
            } else {
                setErro(resposta.mensagem);
            }
        };
        carregar();
    }, [])
    return (
        <>
            <h2>Meus Contatos</h2>
            <Listagem itens={contatos} onModificar={handleModificar} onRemover={handleRemover} />
            {erro && <p>{erro}</p>}
        </>
    );
}
    
export default Listar;