

const ItemDetail = ({id, name, img, category, description, price, stock})=>{
    return(
        <>
        <div className="tituloDetallesTermo1">
            <h2>{name}</h2>
            <h3>{category}</h3>
            <img className="card-img-top imagenDetallesTermo1" src={img} alt={name}></img>
            <p>{description}</p>
            <h3>Precio: {price}</h3>
            <h4>Stock disponible: {stock}</h4>
        </div>
        </>
    )
}

export default ItemDetail