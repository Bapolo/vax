import { useState } from "react"
import { ContextLogin } from "./ContextLogin"

function ProviderLogin({children})
{
    const [logado,setLogado] = useState(false)

    return (
        <ContextLogin.Provider value={{logado,setLogado}}>
            {children}
        </ContextLogin.Provider>
    )
}

export default ProviderLogin