import { Timestamp } from "firebase/firestore";


const CartItem =(card)=>{
    return(
        <div className="card mb-3" style="max-width: 540px;">
      <div className="row g-0">
        <div className="col-md-4">
           <img className="img-fluid rounded-start" src={card.img} alt={card.name}></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{card.name}</h2>
            <p className="card-text">{card.price}</p>
            {/* <p className="card-text"><small className="text-body-secondary">{Timestamp.fromDate(new Date())}</small></p> */}
          </div>
        </div>
      </div>
    </div>
    )
}
export default CartItem