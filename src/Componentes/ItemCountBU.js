
import useCounter from './useCounter'

const ItemCountBU =({})=>{
    
    const {onAdd,sumar,restar,stock,initial}= useCounter()
    
    console.log(onAdd)


    return(
        <div>
            <h2>ItemCount</h2>
            <p> Contador :{onAdd}</p>
            <button onClick={sumar} className='btn sumar btn-outline-danger'>+</button>
            <button onClick={restar} className='btn restar btn-outline-danger'>−</button>
            <button>Agregar al Carrito</button>
            <p>El stock disponible es: {stock}</p>
        </div>
    )
}
export default ItemCountBU






