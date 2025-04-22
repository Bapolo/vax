import logo from '../imagens/vax-logo.png'
import Botao from '../componentes/Botao'
import FormLogin from '../componentes/FormLogin'
import logoGoogle from '../imagens/google.png'

function Login()
{
    return (
        <div className = "container py-2 px-4 font-light flex flex-col gap-3 justify-center items-center" style = {{height: `100vh`, width: `100vw`}}>
            <img src = {logo} alt = "Logo vax" className="object-contain w-40"/>
            <h1 className="text-4xl font-medium">Boas-vindas</h1>
            <h3 className="text-xl font-medium">Entre no Vax para continuar</h3>

            <Botao type = "button" texto = {(<> <img src={logoGoogle} alt="logo do google" className="w-10"/> <p>Continuar com o Google</p></>)} styles="text-black flex items-center justify.center gap-2" acao={() => alert("Olá")}/>

            <p>ou</p>
            <FormLogin />
        </div>
    )
}

export default Login