// import React from 'react';
// import Nieto from './Nieto';

// const Hijo = ({estadoDelPadre, handleClick,miFuncion}) => {

//     const handleClickHijo =()=>{
//         handleClick()
//     }

//   return (
//     <div>
//       <h4>Hijo</h4>
//       <p>El estado del padre es: {estadoDelPadre ? "TRUE":"FALSE"}</p>
//       <button onClick={handleClickHijo}>Ejecutar mi función local</button>
//       <Nieto miFuncion={miFuncion}/>
//     </div>
//   )
// }

// export default Hijo


import CartItem from "./Nieto"

const CartList = ({ 
  estadoDelPadre , 
  handleClick ,
  miFuncion
}) => {

  const handleClickHijo = () => {
    handleClick()
  }

  
  return (
    <div>
      <p>El estado del padre es: {estadoDelPadre ? "TRUE" : "FALSE"}</p>
      <button onClick={handleClickHijo}>ejecutar mi funcion local</button>
      <CartItem miFuncion={miFuncion}/>
    </div>
  )
}
export default CartList