import { useContext } from "react"
import { CartContext } from "../pages/Context.js/CartContext"
import { Link } from "react-router-dom"

const CartWidget =(props)=>{

const { getCantidad } = useContext(CartContext)

    return(
        <>
            <Link to='/cart' style={{display:getCantidad > 0 ? 'block' : 'none'}}>
            <h4 className="img-circlee">{0}<span><img src="images/carrito.png" alt="carrito" className="img-circle"></img></span></h4>
            { getCantidad }
            </Link>
        </>
    )
}

export default CartWidget


