
import ItemListContainerr from "./Componentes/ItemListContainerr";
import NavBar from "./Componentes/NavBar";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Componentes/ItemDetailContainer"; 
import NotFound from "./Componentes/NotFound";
import Footer from "./Componentes/Footer";
import CustomProvider from "./pages/CustomProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';


function App() {
return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar/>
        <main>
        <Routes>
            <Route path="/" element={<ItemListContainerr greeting="Bienvenidos al mundo de los termos"/>}></Route>
            <Route path="category/:categoria" element={<ItemListContainerr />}></Route>
            <Route path="item/:itemId" element={<ItemDetailContainer/>}></Route> 
            {/* <Route path="/cart" element={<Cart/>}></Route> */}
            <Route path="*" element={<NotFound/>}></Route> 
        </Routes> 
        </main>
        <Footer/>
        <ToastContainer/>
      </CustomProvider>
    </BrowserRouter>  
)
}

export default App;
