import logo from '../imagens/vax-logo.png'
import Input from '../componentes/Input'
import { useContext, useState, useEffect } from 'react'
import Botao from '../componentes/Botao'
import useRedirecionar from '../helpers/useRedirecionar'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import Loader from '../componentes/Loader'
import { ContextLogin } from '../componentes/ContextLogin'

function Cadastrar()
{
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")
    const [carregar,setCarregar] = useState(false)
    const { logado, setLogado } = useContext(ContextLogin)

    const redirecionar = useRedirecionar()

    useEffect(() =>
    {
        localStorage.getItem("logadoOn") && setLogado(true)
    }, [])

    async function cadastrarUsuario(auth, nome, sobrenome, senha, email)
    {
        if ((!nome || !sobrenome || !email || !senha))
        {
            setErro("Preecha os dados antes de enviar!")
            return
        }
            
        try
        {
            setCarregar(true)
            const credenciaisUsuario = await createUserWithEmailAndPassword(auth, email, senha)
            setNome("")
            setSobrenome("")
            setEmail("")
            setSenha("")
            setLogado(true)
            localStorage.setItem("logadoOn", true)
            console.log("Usuario cadastrado com sucesso: ", credenciaisUsuario.user)
        } catch (erro) {
            throw new Error("Erro ao cadastrar")
            setLogado(false)
        } finally {
            setCarregar(false)
            logado && redirecionar("/")
        }
    }
    
    return(
        <div className = "container pb-10 px-4 font-light flex flex-col gap-3 m-auto justify-center items-center bg-white" style = {{height: `100vh`, width: `100vw`}}>
            { carregar ? (<Loader />):(
                <>
                    <img src = {logo} onClick = { () => redirecionar("/") } alt = "Logo vax" className="object-contain w-40"/>
                    <h1 className="text-4xl font-medium">Cadastrar</h1>
                    <h3 className="text-xl font-medium">Cadastre-se no Vax para continuar</h3>
        
                    <form onSubmit = {(e) => e.preventDefault()} className="font-light pt-2 flex flex-col items-center justify-center">
        
                        {erro && <p className = "text-red-600 my-2">{erro}</p>}
        
                        <Input type = "text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome" />
        
                        <Input type = "text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} placeholder="sobrenome" />
        
                        <Input type = "email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        
                        <Input type = "password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senha" />
        
                        <Botao type = "button" texto ="cadastrar"  styles="bg-black text-white text-black w-75" acao={ () => cadastrarUsuario(auth, nome, sobrenome, senha, email) }/>
        
                        <p className="text-blue-700 underline" onClick={() => redirecionar("/login")}>Login?</p>
                    </form>
                </>
            )}
        </div>
    )
}

export default Cadastrar