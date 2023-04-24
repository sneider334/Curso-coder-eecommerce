




const Main = (props)=>{

    console.log(props)
const handleClick = ()=>{
    console.log ("click")
}

    return (
        <main className="main">
            <h2>{props.titulo}</h2>
            <section>
                {/* <button onClick={()=>{handleClick}}></button>
                <img src="/images/nombreimagen.png" alt=""></img> */}

            </section>
        </main>
    )
}

// export default Main;

{/* <Main titulo= "Bienvenido" edad={33}/>
<Footer /> */}

// import Main from "../Main";
// import Footer from "../Footer";
//   const id = "parrafo-variable"
//   return <p id={id} onClick>Mi primer p</p>;

// return <>
//   <header>
//     <h1></h1>
//   </header>
//   <main>
//      <h2></h2>
//   </main>
// </>