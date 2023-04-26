import { Route, Routes } from "react-router-dom"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2"
import Page3 from "../pages/Page3"
import Page4 from "../pages/Page4"


const Main = (props)=>{


    return (
        <main className="main">
            <h2>{props.titulo}</h2>
            <section>
            <Routes>
                <Route path="/" element={<Page1/>}/>
                <Route path="/categoria/1" element={<Page2/>}/>
                <Route path="/categoria/2" element={<Page3/>}/>
                <Route path="carrito" element={<Page4/>}/>
            </Routes>
            </section>
        </main>
    )
}

export default Main;

{/* <Main titulo= "Bienvenido" edad={33}/>
<Footer /> */}

