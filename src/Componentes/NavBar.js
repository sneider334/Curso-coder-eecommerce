import CartWidget from "./CartWidget";


const NavBar = ()=>{
    return (
    <>
    <header className="header">
        <h1 className="text-muted header__title"> Garrafas coderhouse</h1>
        <nav className="nav">
            <a href="#" className="link first_link">Link 1</a>
            <a href="#" className="link second_link">Link 2</a>
            <a href="#" className="link third_link">Link 3</a>
            <a href="#" className="link fourth_link">Link 4</a>
        </nav>
    </header>
    <CartWidget/>
    </>)
}


export default NavBar


