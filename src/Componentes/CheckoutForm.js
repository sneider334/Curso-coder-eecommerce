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
    <div style={{margin:10}}>
        <form onSubmit={handleConfirmation}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={nombre} onChange={({target})=>setNombre(target.value)}/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Teléfono</label>
                <input type="text" value={movil} onChange={({target})=>setMovil(target.value)} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <label for="exampleInputPassword1" className="form-label">
                    Email
                    <input type="email" value={email} onChange={({target})=>setEmail(target.value)} className="form-control" id="exampleInputPassword1"></input>
                </label>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
                <button className="btn btn-dark" onClick={handleConfirmation}>Enviar</button>
        </form>
    </div>
    )
}

export default Formulario