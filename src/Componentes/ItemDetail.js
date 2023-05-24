import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCountBU from "./ItemCountBU";
import { useState } from "react";


const ItemDetail = ({detail})=>{

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const { addToCart } = useContext(CartContext);

    const handleOnAdd = (contador)=>{
        setCantidadAgregada(contador);
        addToCart(detail, contador)
    }

    return(
        <div className="tituloDetallesTermo1">
            <h2>{detail.name}</h2>
            <img className="card-img-top imagenDetallesTermo1" src={detail.img} alt={detail.name}></img>
            <p>{detail.description}</p>
            <h3>Precio: ${detail.price}</h3>
            <h4>Stock disponible: {detail.stock}</h4>
        {
          cantidadAgregada > 0 ? (
            <Link to='/cart' className="btn sumar btn-outline-info">Terminar Compra (Ir al carrito)</Link>
           ) : ( 
            <ItemCountBU onAdd={handleOnAdd}></ItemCountBU>
            )
        } 
        </div>
    )
}

export default ItemDetail