import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { mockAsyncDetail } from "./MockAsync";

const ItemDetailContainer=({productos})=>{

    const [estado,setEstado] = useState({})

    const parametros = useParams()

    useEffect(()=>{
       
        mockAsyncDetail()
        .then((resultado) =>{
            console.log(resultado)
            setEstado(resultado)
        })
        .catch((err) =>console.log(err))
        .finally(()=>console.log("finished"))
    },[parametros.id])

    const seleccionar =()=>{
        return 
    }

    // const separar = estado.find(element => element == productos.id)


    return(
        <>
        <ItemDetail detalles="messiontolibre"/>
        <ItemCount></ItemCount>
        </>
    )
    
}

export default ItemDetailContainer