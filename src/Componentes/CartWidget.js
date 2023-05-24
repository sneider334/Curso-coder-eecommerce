import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

const CartWidget =()=>{

const { getCantidad } = useContext(CartContext)

    return(
        <>
            <Link to='/cart' style={{display:getCantidad() > 0 ? 'block' : 'none'}}>
            <h4 className="img-circlee">{getCantidad()}<span><img src="images/carrito.png" alt="carrito" className="img-circle"></img></span></h4>
            { getCantidad }
            </Link>
        </>
    )
}

export default CartWidget