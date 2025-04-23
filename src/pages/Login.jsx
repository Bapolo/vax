import logo from '../imagens/vax-logo.png'
import Botao from '../componentes/Botao'
import FormLogin from '../componentes/FormLogin'
import logoGoogle from '../imagens/google.png'
import useRedirecionar from '../helpers/useRedirecionar'
import { auth } from '../../firebase'
import { useState } from 'react'

function Login()
{
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    async function loginEmailSenha()
    {
        try
        {
            const response = signInWithEmailAndPassword(auth, email, senha)
            console.log(response)
            console.log("Login feito com sucesso!")
        } catch (error) {
            console.log("Erro ao efectuar o login: ", error)
        }
    }

    const redirecionar = useRedirecionar()
    return (
        <div className = "container px-4 font-light flex flex-col gap-3 m-auto justify-center items-center" style = {{height: `100vh`, width: `100vw`}}>
            <img src = {logo} onClick = { () => redirecionar("/") } alt = "Logo vax" className="object-contain w-40"/>
            <h1 className="text-4xl font-medium">Boas-vindas!</h1>
            <h3 className="text-xl font-medium">Entre no Vax para continuar</h3>

            <Botao type = "button" texto = {(<> <img src={logoGoogle} alt="logo do google" className="w-10"/> <p>Continuar com o Google</p></>)} styles="text-black flex items-center justify.center gap-2" acao={() => alert("Olá")}/>

            <p>ou</p>
            <FormLogin email={ email } setEmail={ setEmail } senha={ senha } setSenha={ setSenha }/>
        </div>
    )
}

export default Login