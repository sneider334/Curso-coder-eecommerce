import { useState } from "react";

const Formulario =({onConfirm})=>{

    const [nombre,setNombre] = useState("")
    const [movil,setMovil] = useState("")
    const [email,setEmail] = useState("")

    const handleConfirmation =(e)=>{
        e.preventDefault();

        const dataUsuarios = {nombre, movil, email}

        onConfirm(dataUsuarios)
    }

    return(
        <div>
            <form onSubmit={handleConfirmation}>
                <label>
                    Nombre
                    <input type="text" value={nombre} onChange={({target})=>setNombre(target.value)}></input>
                </label>
                <label>
                    Teléfono
                    <input type="text" value={movil} onChange={({target})=>setMovil(target.value)}></input>
                </label>
                <label>
                    Nombre
                    <input type="email" value={email} onChange={({target})=>setEmail(target.value)}></input>
                </label>
            </form>
        </div>
    )
}

export default Formulario