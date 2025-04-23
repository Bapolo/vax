function Input({type, value, onChange, placeholder})
{
    return (
        <input type = {type} value={value} onChange={ onChange } placeholder={placeholder} className="py-3 px-5 w-75 my-4 border border-black rounded-md outline-black focus:outline-emerald-900 focus:border-emerald-900" required/>
    )
}

export default Input