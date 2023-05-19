import React from 'react'
import { useState, useRef } from 'react'

const Nieto = ({miFuncion}) => {

    const valorDelContexto = useContext(contexto)

    const ref = useRef()

    const [valor,setValor]= useState("")

    const handleChange =(e)=>{
    //   console.log(e.target.value)
        miFuncion(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        miFuncion(valor)
    }

  return (
    <div>
      Nieto
      <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange}></input>
      <button>Enviar</button>
      </form>
    </div>
  )
}

export default Nieto
