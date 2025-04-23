import Botao from "./Botao"
import googleImage from '../imagens/google.png'

function FormLogin({email, setEmail, senha, setSenha})
{
    function enviar(e)
    {
        e.preventDeault()
    }

    return (
        <form onSubmit = {enviar} className="font-light pt-2 flex flex-col items-center justify-center">
            <input type = "email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="py-3 px-5 w-75 my-4 border border-black rounded-md outline-black focus:outline-emerald-900 focus:border-emerald-900" />

            <input type = "password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senha" className="py-3 px-5 w-75 my-4 border border-black rounded-md outline-black focus:outline-emerald-900 focus:border-emerald-900" />

            <Botao type = "button" texto ="continuar"  styles="bg-black text-white text-black w-75" acao={() => alert("Olá")}/>
        </form>
    )
}

export default FormLogin