import React from 'react'
import Hijo from './Hijo'
import { useState } from 'react'
import { serverTimestamp } from 'firebase/firestore'
import { crearVenta } from '../util'

const Cart2 = () => {

    const [estadoLocal, setEstadoLocal] = useState(true)
    const [otroEstado, setOtroEstado] = useState("texto inicial")

    const handleClick = () => {
        setEstadoLocal(!estadoLocal)
    }
    const miFuncion = (valorDelInput) =>{
        setOtroEstado(valorDelInput)
    }
    const venta = {
      carrito:carrito,
      user: {
        nombre:"tisan",
        telefono:"123456789",
        email:"mail@gmail.com"
      },
      total:30000,
      totalCant: 6,
      fecha_de_compra : serverTimestamp(),

      
    }

    crearVenta(venta)
    .then((id)=>{
      
    })

  return (
    <div>
        <p>Estado local : {estadoLocal ? "TRUE":"FALSE"}</p>
        <button onClick={handleClick}>Cambiar estado local</button>
        <Hijo estadoDelPadre ={estadoLocal} handleClick={handleClick} miFuncion={miFuncion}/>
    </div>
  )
}

export default Cart2
