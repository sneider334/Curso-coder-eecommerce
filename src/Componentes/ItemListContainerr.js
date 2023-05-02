import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {mockAsync} from "./MockAsync";

const ItemListContainerr = ({greeting}) => {

    const [estado,setEstado] = useState([])
    const [loading, setLoading] = useState(false)

    const parametros = useParams()
    
    useEffect(()=>{
            setLoading(true)
            mockAsync()
            .then((resultado) =>{
                setEstado(resultado)
            })
            .catch((err) =>console.log(err))
            .finally(()=>setLoading(false))
    },[])

    console.log (estado)

    return (
        <>
        <h3>{greeting}</h3>
        {loading? <p>Cargando...</p>:<ItemList losProductos={estado}/>}
        </>
    )}


export default ItemListContainerr