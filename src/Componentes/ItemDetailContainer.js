import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCountBU from "./ItemCountBU";
import { mockAsyncDetail } from "./MockAsync";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";


const ItemDetailContainer=({productos})=>{

    const [detalle,setDetalle] = useState({})
    const [loading, setLoading] = useState(true)

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
    
      if (loading) {
        return (
          <div className="detalle">
            <div>
              <Skeleton height={400} />
            </div>
            <div>
              <Skeleton count={5} />
              <br />
              <br />
              <Skeleton width={100} />
            </div>
          </div>
        )
      }

    return(
        <>
        <ItemDetail {...detalle}/>
        <ItemCountBU></ItemCountBU>
        </>
    )
    
}


export default ItemDetailContainer