import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";


const ItemDetailContainer=()=>{

    const [detalle,setDetalle] = useState({})
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    const GetProductos = async (itemId) => {
        try {
            const productosCollection = collection(db, "productos")
        
            const traerQuery = await getDocs(productosCollection);

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

        toast.info("Cargando el detail del producto, espere por favor...")

        GetProductos()
            .then((resultado) => {
                toast.dismiss()
                toast.success("Cargado!",{autoClose: 500})
                let unitario = resultado.find((x)=>x.id == itemId)
                setDetalle(unitario);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [itemId]);

    return(
        <div className="titulosDetallesTermo1">
            <ItemDetail detail={detalle}/>
        </div>
    )
    
}

export default ItemDetailContainer