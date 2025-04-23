import { useState } from "react"
import { ContextLogin } from "./ContextLogin"

function ProviderLogin({children})
{
    const [login,setLogin] = useState()

    return (
        <ContextLogin.Provider value={{login,setLogin}}>
            {children}
        </ContextLogin.Provider>
    )
}

export default ProviderLogin