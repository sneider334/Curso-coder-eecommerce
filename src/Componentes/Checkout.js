import Formulario from "./CheckoutForm";
import { db } from "./firebase";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";



const Checkout =()=>{
    const [loading, setLoading] = useState(false)
    const [idOrden, setIdOrden] = useState('')

    const {cart, clearCart, getTotal} = useContext(CartContext)

    const crearOrden = async ({nombre, movil, email}) =>{
        setLoading(true)

        try {
            const objeto = {
                comprador:{
                    nombre, movil, email
                },
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            
            const documentos = cart.map((x)=>x.id)
            const productosReferencia = collection(db, 'productos')
            const agregarProductos = await getDocs(query(productosReferencia,where(documentId(),"in",documentos)))
            const {docs} = agregarProductos

            await batch.commit();
            const ordenReferencia = collection(db, 'ventas')
            const agregarOrden = await addDoc(ordenReferencia,objeto)

            setIdOrden(agregarOrden.id)
            clearCart()
       
        }  catch (err){
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    if (loading) {
        return(<p className="orderIdProgreso">La orden está en progreso...</p>)
    }
    if (idOrden) {
        return(<h1 className="orderId">El id de su orden es: {idOrden}</h1>)
    }
    return (
        <div className="checkout">
            <h1 style={{margin:5}}>Checkout</h1>
            <Formulario onConfirm={crearOrden}/>
        </div>
    )
}

export default Checkout