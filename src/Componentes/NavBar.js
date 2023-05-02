import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom"

const NavBar = ()=>{
    return (
    <>
    <header className="header">
        <NavLink to="/">
        <h1 className="header__title"> Distibuidora de termos S.A</h1>
        </NavLink>
        <nav className="nav">
            <NavLink to={`/category/acero_inoxidable`} className="link first_link">Termos Acero</NavLink>
            <NavLink to={`/category/plasticos` }className="link second_link">Termos Plástico</NavLink>
            <NavLink to="/cart" className="link third_link">Carrito</NavLink>
            <NavLink to="#" className="link fourth_link"><CartWidget/></NavLink>
        </nav>
    </header>
    
    </>)
}


export default NavBar


