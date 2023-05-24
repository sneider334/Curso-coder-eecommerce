//Aca voy a dejar los métodos que interactuan con la DB de Firebase 
import { db } from "./firebase";
import { collection, getDocs, where, query, addDoc, orderBy} from "firebase/firestore";
import { useParams } from "react-router-dom";

export const GetProductos = ()=>{
    const {categoria} = useParams();
    const productosCollection = categoria ?  query(productosCollection,where("category","==",categoria), orderBy("price","asc")) : collection (db,"productos");
    // const productosCollection = collection(db,"productos");
    return getDocs(productosCollection)
    .then((respuesta)=>{
        console.log("todo salio joya");
        const arrayDocumentos = respuesta.docs.map((doc)=>{
            const producto = {
                id: doc.id,
                ...doc.data()
            }
            return producto
        })
        return arrayDocumentos
    })
    .catch(err=>console.log("Hubo un error pidiendo los productos"))
}

export const GetProductosPorCategoria1 =()=>{
    const {categoria} = useParams();
    const productosCollection = collection(db,"productos");
    const prodCol = categoria ?  query(productosCollection,where("category","==",categoria), orderBy("price","asc")) : collection (db,"productos");
    // const filtro = query(productosCollection,where("category","==","acero inoxidable"), orderBy("price","asc"));
    getDocs(prodCol)
    .then((respuesta)=>{
        console.log("todo salio joya");
        const arrayDocumentos = respuesta.docs.map((doc)=>{
            const producto = {
                id: doc.id,
                ...doc.data()
            }
            return producto
        })
        return arrayDocumentos
    })
    .catch(err=>console.log(err))
}

export const GetProductosPorCategoria2 =()=>{
    const productosCollection = collection(db,"productos");
    const filtro = query(productosCollection,where("category","==","plastico"), orderBy("price","asc"));
    getDocs(filtro)
    .then((respuesta)=>{
        console.log("todo salio joya");
        const arrayDocumentos = respuesta.docs.map((doc)=>{
            const producto = {
                id: doc.id,
                ...doc.data()
            }
            return producto
        })
        return arrayDocumentos
    })
    .catch(err=>console.log(err))
}




const saveSale = ()=>{
    
}
const getProductoDetail = ()=>{
    
}

export const crearVenta=(venta)=>{
    const ventasCollection = collection(db,"ventas");
    const consulta = addDoc(ventasCollection,venta);
}


// async function saludo(){}

// const otroSaludo = async ()=>{}