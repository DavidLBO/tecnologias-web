import './Input.css'

function InputEmail() {
    return(
        <>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" required/>
        </>
    );
}

export default InputEmail;