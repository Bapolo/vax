import { useNavigate } from "react-router-dom"

function useRedirecionar()
{
    const redirecionar = useNavigate()

    return (redirecionar)
}

export default useRedirecionar