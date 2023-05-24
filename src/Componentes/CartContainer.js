import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
 
const CartContainer = () => {

  const { cart, clearCart, getTotal, getCantidad } = useContext(CartContext)

  if (getCantidad() === 0) {
    return(
      <div className="cantidad-vacio">
        <h1 style={{fontSize:20}}>No hay elementos en el carrito</h1>
        <Link to='/' className="btn btn-info">Productos</Link>
      </div>
    )
  } 

 return (
    <div className="venta">
        {cart.map((card)=>{
                  return <CartItem key={card.id} {...card}/>
                })}
        <h3 style={{padding: 5}}>Total: ${getTotal()}</h3>
        <button style={{marginLeft: 5, marginBottom:5}} onClick={()=>clearCart()}  className="btn btn-info">Limpiar carrito</button>
        <Link to='/checkout' style={{marginLeft: 5, marginBottom:5}} className="btn btn-info">Terminar compra</Link>
    </div>
  )
}

export default CartContainer