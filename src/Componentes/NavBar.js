import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom"

const NavBar = ()=>{
    return (
    <>
    <header className="header">
        <h1 className="text-muted header__title"> Garrafas coderhouse</h1>
        <nav className="nav">
            <NavLink to="/categoria/1" className="link first_link">Categoria 1</NavLink>
            <a href="/categoria/2" className="link second_link">Categoria 2</a>
            <a href="carrito" className="link third_link">carrito</a>
            <a href="#" className="link fourth_link">Link 4</a>
        </nav>
    </header>
    <CartWidget/>
    </>)
}


export default NavBar


