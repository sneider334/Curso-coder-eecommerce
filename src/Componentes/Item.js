import { Link } from "react-router-dom";
import useCounter from "../Hooks/useCounter";
import React from "react";

const Item = ({productos}) =>{
    const {stock}= useCounter();
    return(
        <div className="card">
            <p><h1 className="tituloTermo1">{productos.name}</h1></p>
            <img className="card-img-top imagenTermo1" src={productos.img} alt={productos.name}></img>
            <div className="card-body">
            <h5 className="card-title">{productos.description}</h5>
            <p class="card-text"></p>
            <Link to={`/item/${productos.id}`} class="btn btn-primary">Mostrar mas detalles</Link>    
            <p className="stockTermo1">Stock disponible: {stock}</p> 
            </div>
        </div>
    )
}

export default Item