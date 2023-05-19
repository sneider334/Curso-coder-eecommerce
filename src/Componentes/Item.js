import { Link } from "react-router-dom";
import ItemCount from "../pages/ItemCount";
import React from "react";

const Item = ({item}) =>{
    return(
        <div className="card">
            <p><h1 className="tituloTermo1">{item.name}</h1></p>
            <img className="card-img-top imagenTermo1" src={item.img} alt={item.name}></img>
            <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
            <Link to={`/item/${item.id}`} className="btn btn-primary but">Mostrar mas detalles</Link>    
            <p className="stockTermo1">Stock disponible: {item.stock}</p> 
            </div>
        </div>
    )
}

export default Item