import Botao from "./Botao"
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Input from "./Input"

function FormLogin({email, setEmail, senha, setSenha, erro, setErro, carregar, setCarregar})
{
    function enviar(e)
    {
        e.preventDeault()
    }

    async function loginEmailSenha()
    {
        if ((!email || !senha))
        {
            setErro("Email e senha precisam ser preenchidos!")
            return
        }

        try
        {
            setCarregar(true)
            const response = await signInWithEmailAndPassword(auth, email, senha)
            setCarregar(false)
            setEmail("")
            setSenha("")
            console.log(response)
            console.log("Login feito com sucesso!")
        } catch (error) {
            setErro(error.message)
            console.log(error.message)
        }
    }

    return (
        <form onSubmit = {enviar} className="font-light pt-2 flex flex-col items-center justify-center">

            {erro && <p className = "text-red-600 my-2">{erro}</p>}

            <Input type = "email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />

            <Input type = "password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senhaa" />

            <Botao type = "button" texto ="continuar"  styles="bg-black text-white text-black w-75" acao={ loginEmailSenha }/>
        </form>
    )
}

export default FormLogin