
import useCounter from './useCounter'

const ItemCountBU =({onAdd})=>{
    
    const {contador,sumar,restar,stock}= useCounter()

    return(
        <div>
            <h2>ItemCount</h2>
            <p> Contador :{contador}</p>
            <button onClick={sumar} className='btn sumar btn-outline-danger'>+</button>
            <button onClick={restar} className='btn restar btn-outline-danger'>−</button>
            <button onClick={()=>onAdd(contador)} className="btn sumar btn-outline-danger">Agregar al Carrito</button>
            <p>El stock disponible es: {stock}</p>
        </div>
    )
}
export default ItemCountBU






