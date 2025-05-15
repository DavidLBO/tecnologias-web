import './Input.css'

function InputSenha() {
    return(
        <>
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" required/>
        </>
    );
}

export default InputSenha;