import {useState} from 'react'

const ItemCount =({stock,initial,onAdd})=>{

    const [cantidad,setCantidad] = useState(initial);

    const sumar = cantidad > initial;
    const restar = cantidad >= 0;

    const handleSumar =()=>{
        if (sumar) {
            setCantidad(cantidad + 1)
        }
     }
    const handleRestar =()=>{
        if (restar) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={handleRestar}>−</button>
                <h4 className="Number">{cantidad}</h4>
                <button className="Button" onClick={handleSumar}>+</button>
            </div>
        </div>
    ) 
}

export default ItemCount