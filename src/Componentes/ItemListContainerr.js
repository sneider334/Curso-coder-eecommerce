import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
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
        <div>
            {
                !categoria ? (
                <div className='greeting-container'><h3 className="greeting">{greeting}</h3></div>
                ) : (
                    <div className="categorias"></div>
                )
            }
                <div className="contenido">
                <div className="contenido-dentro">
                    {loading ? <p>Cargando...</p> : <ItemList losProductos={estado} />}
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;