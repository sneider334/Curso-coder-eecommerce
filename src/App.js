
import ItemListContainerr from "./Componentes/ItemListContainerr";
import NavBar from "./Componentes/NavBar";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Componentes/ItemDetailContainer"; 
import NotFound from "./pages/NotFound";
import Footer from "./Footer";


function App() {
return (
    <BrowserRouter>
        <NavBar/>
        <main>
        <Routes>
            <Route path="/" element={<ItemListContainerr greeting="Bienvenidos al mundo de los termos"/>}></Route>
            <Route path="category/:id" element={<ItemListContainerr/>}></Route>
            <Route path="item/:itemId" element={<ItemDetailContainer/>}></Route> 
            {/* <Route path="/cart" element={<Cart/>}></Route> */}
            <Route path="*" element={<NotFound/>}></Route> 
        </Routes> 
        </main>
        <Footer/>
    </BrowserRouter>  
)
}

export default App;
