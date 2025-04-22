function Botao({type, texto, acao, styles})
{
    return (
        <button type = {type} className = {`cursor-pointer py-2 px-6 border border-black rounded-md text-xl ${styles}`} onClick ={acao}>{texto}</button>
    )
}

export default Botao