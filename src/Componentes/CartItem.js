import { useContext } from "react";
import { CartContext } from "./CartContext"


const CartItem =(card)=>{

    const { removeFromCart } = useContext(CartContext)

    return(
    <div style={{padding: 5}}>
        <div className="card mb-3" style={{maxWidth: 540}}>
      <div className="row g-0">
        <div className="col-md-4">
           <img className="img-fluid rounded-start" style={{height: 100, width:100}} src={card.img} alt={card.name}></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
            <h6 className="card-text" style={{marginLeft: 19}}>Price: ${card.price}</h6>
            <div style={{marginLeft: 19}}>Cantidad: {card.cantidad}</div>
            <button onClick={()=>removeFromCart(card.id)} className="btn btn-dark btn-outline-info" style={{position:"absolute", right:10, bottom: 57}}>X</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
export default CartItem