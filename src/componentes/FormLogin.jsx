import Botao from "./Botao"
import googleImage from '../imagens/google.png'

function FormLogin()
{
    function enviar(e)
    {
        e.preventDeault()
    }

    return (
        <form onSubmit = {enviar} className="font-light flex flex-col items-center justify-center">
            <input type = "email" placeholder="email" className="py-2 px-4 my-4 border border-black rounded-md focus:outline-emerald-900" />

            <Botao type = "button" texto ="Continuar"  styles="bg-black text-white text-black" acao={() => alert("Olá")}/>
        </form>
    )
}

export default FormLogin