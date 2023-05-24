// import React from 'react'
// import { useState} from 'react'
// import { useContext } from 'react'
// import { CartContext } from './Context.js/CartContext'

// const Nieto = ({miFuncion}) => {

//     const valorDelContexto = useContext(CartContext)

//     const [valor,setValor]= useState("")

//     const handleChange =(e)=>{
//         miFuncion(e.target.value)
//     }
//     const handleSubmit =(e)=>{
//         e.preventDefault();
//         miFuncion(valor)
//     }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <input type='text' onChange={handleChange}></input>
//       <button>Enviar</button>
//       </form>
//     </div>
//   )
// }

// export default Nieto



import { useContext, useRef } from "react"
import { CartContext } from "./Context.js/CartContext"

const CartItem = ({ miFuncion }) => {

  const valorDelContexto = useContext(CartContext)

  console.log(valorDelContexto)

  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    miFuncion(ref.current.value)
  }


  return (
    <div>
      {/* {valorDelContexto.username} */}
      <form onSubmit={handleSubmit}>
        <input ref={ref} /* onChange={handleChange} */ type="text" />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default CartItem