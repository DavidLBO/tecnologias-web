import './Input.css'


function InputNome() {
    return(
        <>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" required/>
        </>
    );
}

export default InputNome;