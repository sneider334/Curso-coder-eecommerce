import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCountBU from "../BackUp/ItemCountBU";
import { mockAsyncDetail } from "./MockAsync";

const ItemDetailContainer=({productos})=>{

    const [estado,setEstado] = useState({})

    const {itemId} = useParams()

    useEffect(()=>{
        mockAsyncDetail(itemId)
        .then((resultado) =>{
            setEstado(resultado)
        })
        .catch((err) =>console.log(err))
        .finally(()=>console.log("finished"))
    },[itemId])

    return(
        <>
        <ItemDetail {...productos}/>
        <ItemCountBU></ItemCountBU>
        </>
    )
    
}

export default ItemDetailContainer