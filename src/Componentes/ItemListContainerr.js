import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { GetProductos, GetProductosPorCategoria1 } from "../util";


const ItemListContainerr = ({greeting}) => {

    const [estado,setEstado] = useState([])
    const [loading, setLoading] = useState(false)

    const parametros = useParams()
    
    useEffect(()=>{
           GetProductos()
           .then((resultado)=>{
            setEstado(resultado)
            setLoading(true)
          })

          // GetProductosPorCategoria1()
          // .then((resultado)=>{
          //   setEstado(resultado)
          //   setLoading(true)
          // })
    },[parametros.id])
    
    // let estadoAux = []

    // let {categoria} = useParams()
    // if (categoria == "plastico") {
    //   estadoAux = estado.filter((x)=>x.category=="plastico")
    // } else if (categoria == "acero_inoxidable"){
    //     estadoAux = estado.filter((x)=>x.category=="acero inoxidable")
    // } else{estadoAux=estado}

    // console.log(categoria)
    // console.log (estadoAux)

    // console.log (estado)

    
    
    // let estadoAux = []

    // // let {categoria} = useParams()
    // // if (categoria == "plastico") {
    // //   estadoAux = estado.filter((x)=>x.category=="plastico")
    // // } else if (categoria == "acero_inoxidable"){
    // //     estadoAux = estado.filter((x)=>x.category=="acero inoxidable")
    // // } else{estadoAux=estado}

    // // console.log(categoria)
    // // console.log (estadoAux)

    // // console.log (estado)

    return (
        <>
        <h3 className="greeting">{greeting}</h3>
        {loading? <p>Cargando...</p>:<ItemList losProductos={estado}/>}
        </>
    )}


export default ItemListContainerr