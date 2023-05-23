// import React from 'react'
// import Hijo from './Hijo'
// import { useState } from 'react'
// import { serverTimestamp } from 'firebase/firestore'
// import { crearVenta } from '../util'

// const Cart2 = () => {

//     const [estadoLocal, setEstadoLocal] = useState(true)
//     const [otroEstado, setOtroEstado] = useState("texto inicial")

//     const handleClick = () => {
//         setEstadoLocal(!estadoLocal)
//     }
//     const miFuncion = (valorDelInput) =>{
//         setOtroEstado(valorDelInput)
//     }
//     const venta = {
//       user: {
//         nombre:"tisan",
//         telefono:"123456789",
//         email:"mail@gmail.com"
//       },
//       total:30000,
//       totalCant: 6,
//       fecha_de_compra : serverTimestamp(),
//     }

//     crearVenta(venta)
//     .then((id)=>{
      
//     })

//   return (
//     <div>
//         <p>Estado local : {estadoLocal ? "TRUE":"FALSE"}</p>
//         <button onClick={handleClick}>Cambiar estado local</button>
//         <Hijo estadoDelPadre ={estadoLocal} handleClick={handleClick} miFuncion={miFuncion}/>
//     </div>
//   )
// }

// export default Cart2


import { useContext } from "react"
import { serverTimestamp } from "firebase/firestore"
import { crearVenta } from "../util"
import { CartContext } from "./Context.js/CartContext"
import { Link } from "react-router-dom"
 
const CartContainer = () => {

  const { cart, clearCart, isInCart, addToCart, removeFromCart, getTotal, getCantidad } = useContext(CartContext)

  if (getCantidad() === 0) {
    return(
      <div>
        <h1>No hay elementos en el carrito</h1>
        <Link to='/' className="option">Productos</Link>
      </div>
    )
  } else {
 return (
    <>
    <p>Hola</p>
    {cart.map((x)=>{
               return <CartContext key={x.id} {...x}/>
            })}
    <h3>Total: {getTotal}</h3>
    <button onClick={()=>clearCart()} className="btn btn-secondary">Limpiar carrito</button>
    </>
  )
}
  const handleClickCompra = () => {

    //esto vino del contexto en teoria
    const carrito = [
      { id : 1, nombre: "jabon", precio: 200 , cantidad: 2 },
      { id : 2, nombre: "shampoo", precio: 300 , cantidad: 1 },
      { id : 3, nombre: "crema", precio: 400 , cantidad: 3 }
    ]

    const venta = {
      carrito : carrito,
      user : {
        nombre :  "Juan",
        telefono : "12345678",
        email : "mail@mail.com"
      },
      total : 300000,
      totalCant : 6,
      fecha_de_compra : serverTimestamp()
    }

    crearVenta(venta)
    .then((id)=>{
      console.log(id)
    })

  }

    // <>
    //   {/* <p>Estado local : {estadoLocal ? "TRUE" : "FALSE"}</p> */}
    //   {/* {cart.map((x)=>)} */}
    //   {/* <p className="">{ compra ? "El carrito de compras se encuentra vacío" : "False" }</p> */}
    //   {/* <button onClick={handleClick}>cambiar estado local</button> */}
    //   {/* <p>{otroEstado}</p> */}
    //   {/* <CartList
    //     estadoDelPadre={estadoLocal}
    //     handleClick={handleClick}
    //     miFuncion={miFuncion}
    //   /> */}

    //   <button onClick={handleClickCompra}>Finalizar compra</button>
    // </>
}

export default CartContainer