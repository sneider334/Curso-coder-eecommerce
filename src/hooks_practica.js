import {useState,useEffect} from 'react'



const ProductosContainer = ()=>{
    let stock = 10;
    const [cantidad,setCantidad]= useState(0);
    const[usuarios,setUsuarios]= useState([]);

    useEffect(()=>{
        console.log("se reejecuto el componente");
    },[])

    const handleClick = ()=>{
        // console.log({stock});
        // console.log({cantidad});
            setCantidad(cantidad + 1);
            console.log(setCantidad);
    }
    if (usuarios.lenght == 0) {
        return <p>cargando...</p>
    }else{
        //ver en github, hay que agregar un conjunto de usuarios
    }
    return (
        <div>
            <p>{cantidad}</p>
            <button onClick={handleClick}>click</button>
        </div>

    )
}




