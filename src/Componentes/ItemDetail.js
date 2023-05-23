import { useContext } from "react";
import { CartContext } from "../pages/Context.js/CartContext";
import { Link } from "react-router-dom";
import ItemCountBU from "./ItemCountBU";
import { useState } from "react";


const ItemDetail = ({detail})=>{

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const { addToCart,clearCart,isInCart,removeFromCart } = useContext(CartContext);

    console.log(addToCart)
    const handleOnAdd = (contador)=>{
        setCantidadAgregada(contador);
        addToCart(detail, contador)
        // const item = {
        //     id, name, price
        // }
        // addToCart(item, cantidad)
        console.log(addToCart)
    }

    // const { guardarEnCarrito } = useContext(contexto);
    

    // const handleClick =()=>{
    //     guardarEnCarrito();
    // }

    return(
        <>
        <div className="tituloDetallesTermo1">
            <h2>{detail.name}</h2>
            <img className="card-img-top imagenDetallesTermo1" src={detail.img} alt={detail.name}></img>
            <p>{detail.description}</p>
            <h3>Precio: {detail.price}</h3>
            <h4>Stock disponible: {detail.stock}</h4>
            {/* <button onClick={handleClick}></button> */}
        </div>
        {
          cantidadAgregada > 0 ? (
            <Link to='/cart' className="btn sumar btn-outline-danger">Terminar Compra (Ir al carrito)</Link>
           ) : ( 
            <ItemCountBU onAdd={handleOnAdd}></ItemCountBU>
            )
        } 
        </>
    )
}

export default ItemDetail