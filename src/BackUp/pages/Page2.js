import { useParams } from "react-router-dom";
import Page from "../Componentes/Page"

const productos =[
    {
        id: 1,
        nombre: "producto 1",
        categoria : 1
    },
    {
        id: 2,
        nombre: "producto 2",
        categoria: 2
    },
    {
        id: 3,
        nombre: "producto 3",
        categoria: 3
    }
]

const Page2 = ()=>{
    const resultadoDelHook = useParams()

    if (resultadoDelHook.id){
        console.log ("aca voy a buscar los productos de la categoria " + resultadoDelHook.id)
    } else{
        console.log ("aca voy a buscar los productos de la categorias")
    }
    
    return(
        <Page title="Page 2">
        aca muestro un listado de productos por categoria {resultadoDelHook.id}
        <section className="cards">
            {productos.map(producto =>{
                return(
                    <div className="card" key={producto.id}>
                        <img src="http://picsum.photos/200" alt=""/>
                        {producto.nombre}
                        <Link href={"/detalle" + producto.id}>ver mas</Link>
                    </div>
                )
                })}
        </section>
        </Page>
    )
}

export default Page2;