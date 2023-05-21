// import {useEffect, useState} from "react";
// import ItemList from "./ItemList";
// import { useParams } from "react-router-dom";
// import { GetProductos, GetProductosPorCategoria1 } from "../util";


// const ItemListContainerr = ({greeting}) => {

//     const [estado,setEstado] = useState([])
//     const [loading, setLoading] = useState(false)

//     const parametros = useParams()
    
//     useEffect(()=>{
//            GetProductos()
//            .then((resultado)=>{
//             setEstado(resultado)
//             setLoading(true)
//           })

//           // GetProductosPorCategoria1()
//           // .then((resultado)=>{
//           //   setEstado(resultado)
//           //   setLoading(true)
//           // })
//     },[parametros.id])
    
//     // let estadoAux = []

//     // let {categoria} = useParams()
//     // if (categoria == "plastico") {
//     //   estadoAux = estado.filter((x)=>x.category=="plastico")
//     // } else if (categoria == "acero_inoxidable"){
//     //     estadoAux = estado.filter((x)=>x.category=="acero inoxidable")
//     // } else{estadoAux=estado}

//     // console.log(categoria)
//     // console.log (estadoAux)

//     // console.log (estado)

    
    
//     // let estadoAux = []

//     // // let {categoria} = useParams()
//     // // if (categoria == "plastico") {
//     // //   estadoAux = estado.filter((x)=>x.category=="plastico")
//     // // } else if (categoria == "acero_inoxidable"){
//     // //     estadoAux = estado.filter((x)=>x.category=="acero inoxidable")
//     // // } else{estadoAux=estado}

//     // // console.log(categoria)
//     // // console.log (estadoAux)

//     // // console.log (estado)

//     return (
//         <>
//         <h3 className="greeting">{greeting}</h3>
//         {loading? <p>Cargando...</p>:<ItemList losProductos={estado}/>}
//         </>
//     )}


// export default ItemListContainerr

import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, where, query, orderBy } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
    const [estado, setEstado] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoria } = useParams();

    const GetProductos = async (categoria) => {
        try {
            const productosCollection = categoria
                ? query(
                      collection(db, "productos"),
                      where("category", "==", categoria),
                      orderBy("price", "asc")
                  )
                : collection(db, "productos");

            const traerQuery = await getDocs(productosCollection);
            console.log("Todo salió joya");

            const arrayDocumentos = traerQuery.docs.map((doc) => {
                const producto = {
                    id: doc.id,
                    ...doc.data(),
                };
                return producto;
            });

            return arrayDocumentos;
        } catch (err) {
            console.log("Hubo un error pidiendo los productos", err);
            throw err;
        }
    };

    useEffect(() => {
        GetProductos(categoria)
            .then((resultado) => {
                setEstado(resultado);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoria]);

    return (
        <>
            <h3 className='greeting'>{greeting}</h3>
            {loading ? <p>Cargando...</p> : <ItemList losProductos={estado} />}
        </>
    );
};

export default ItemListContainer;