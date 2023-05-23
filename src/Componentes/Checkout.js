import Formulario from "./CheckoutForm";
import { db } from "../firebase";
import { useContext, useState } from "react";
import { CartContext } from "../pages/Context.js/CartContext";
import { Timestamp, addDoc, collection, documentId, getDocs, orderBy, query, where, writeBatch } from "firebase/firestore";



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
                total: getTotal,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            
            const documentos = cart.map((x)=>x.id)
            const productosReferencia = collection(db, 'productos')
            const agregarProductos = await getDocs(query(productosReferencia,where(documentId(),"in",documentos)))
            const {docs} = agregarProductos

            // docs.forEach((doc) => {
            //     const dataDocumento = doc.data()

            //     const productosCarrito = cart.find((x)=> x.id == doc.id)
            //     const productosCantidad = productosCarrito?.cantidad
            // })

            await batch.commit();
            const ordenReferencia = collection(db, 'ventas')
            const agregarOrden = await addDoc(ordenReferencia,objeto)

            setOrderId(agregarOrden.id)
            clearCart()
       
        }  catch (err){
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    if (loading) {
        return(<p>La orden está en progreso...</p>)
    }
    if (orderId) {
        return(<h1>El id de su orden es:{orderId}</h1>)
    }
    return (
        <div>
            <h1>Checkout</h1>
            <Formulario onConfirm={crearOrden}/>
        </div>
    )
}

export default Checkout