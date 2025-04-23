import logo from '../imagens/vax-logo.png'
import Input from '../componentes/Input'
import { useState } from 'react'
import Botao from '../componentes/Botao'
import useRedirecionar from '../helpers/useRedirecionar'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

function Cadastrar()
{
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    const redirecionar = useRedirecionar()

    async function cadastrarUsuario(auth, senha, email)
    {
        try
        {
            const credenciaisUsuario = await createUserWithEmailAndPassword(auth, email, senha)
            console.log("Usuario cadastrado com sucesso: ", credenciaisUsuario.user)
        } catch (erro) {
            console.log("Erro ao cadastrar: ", erro.message)
        }
    }
    
    return(
        <div className = "container pb-10 px-4 font-light flex flex-col gap-3 m-auto justify-center items-center" style = {{height: `100vh`, width: `100vw`}}>
            <img src = {logo} onClick = { () => redirecionar("/") } alt = "Logo vax" className="object-contain w-40"/>
            <h1 className="text-4xl font-medium">Cadastrar</h1>
            <h3 className="text-xl font-medium">Cadastre-se no Vax para continuar</h3>

            <form onSubmit = {(e) => e.preventDefault()} className="font-light pt-2 flex flex-col items-center justify-center">
                <Input type = "text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome" />

                <Input type = "text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="sobrenome" />

                <Input type = "email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />

                <Input type = "password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senhaa" />

                {erro && <p className = "text-red-600 my-2">{erro}</p>}

                <Botao type = "button" texto ="cadastrar"  styles="bg-black text-white text-black w-75" acao={ () => cadastrarUsuario(auth, senha, email) }/>

                <p className="text-blue-700 underline" onClick={() => redirecionar("/login")}>Login?</p>
            </form>
        </div>
    )
}

export default Cadastrar