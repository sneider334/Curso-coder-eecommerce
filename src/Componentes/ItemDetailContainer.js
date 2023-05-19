import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCountBU from "./ItemCountBU";
import { mockAsyncDetail } from "./MockAsync";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const ItemDetailContainer=({productos})=>{

    const [detalle,setDetalle] = useState({})
    const [loading, setLoading] = useState(true)
    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const handleOnAdd = (cantidad)=>{
        setCantidadAgregada(cantidad)
    }

    const {itemId} = useParams()

    useEffect(()=>{
        
        toast.info("Cargando el detail del producto, espere por favor...")

        mockAsyncDetail(itemId)
        .then((resultado) =>{
            toast.dismiss()
            toast.success("Cargado!",{autoClose: 800})
            setDetalle(resultado)
            setLoading(false)
        })
        .catch((err) =>console.log(err))
        .finally(()=>console.log("finished"))

    },[itemId])

    return(
        <>
        <ItemDetail {...detalle}/>
        {
          cantidadAgregada > 0 ? (
            <Link to='/cart' className="btn sumar btn-outline-danger">Terminar Compra</Link>
           ) : (
            <ItemCountBU onAdd={handleOnAdd}></ItemCountBU>
           )
        }
        </>
    )
    
}


export default ItemDetailContainer