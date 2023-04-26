
import ItemListContainerr from "./Componentes/ItemListContainerr";
import NavBar from "./Componentes/NavBar";
import { BrowserRouter } from "react-router-dom";


function App() {
return (
    <BrowserRouter>
        <NavBar/>
        <ItemListContainerr greeting="Bienvenido a esta página"/>
    </BrowserRouter>  
)

}

export default App;
