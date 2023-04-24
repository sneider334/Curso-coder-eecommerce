import { useState } from "react"
import { useEffect } from "react"


const respuestadelFeth = fetch("https://fakestoreapi.com/products")

respuestadelFeth
    .then((respuesta) =>{
        console.log("THEN");
        const parseo = respuesta.json()
        return parseo
    })
    .then((respuesta) =>{
        console.log(respuesta)
    })
    .catch((error) =>{

    })


const userNames = ["alfalfa","ariete","seibo","massin"]

const FormContainer = ()=>{

    const [valor,setValor] = useState("")
    const [usuarios,setUsuarios] = useState([])
    
    useEffect(()=>{
        //simulo que pido algo a una API
        setTimeout(()=>{
            setUsuarios(userNames)
        },2000)
        // despues de 2 segundos trae los datos
    },[])
    
    //Ejemplo de promise con un array de datos,iria dentro de useEffect
    const productos = [
        {id : '1', name : 'producto 1', price:100},
        {id : '2', name : 'producto 2', price:200},
        {id : '3', name : 'producto 3', price:300},
    ]
    const pedido = new Promise((res, rej) =>{
        setTimeout(()=>{
            const isRes = Math.random()>0.5;
            if (isRes) {
                res(productos)
            } else {
                rej("error")
            }
            res(productos)
        },2000)
    })
    pedido
    .then((resultado) =>{
        console.log(resultado)
        setUsuarios(resultado)
    })
    .catch((err) =>console.log(err));
    pedido.finally(()=>console.log("finished"));
    // El valor del res, en esto caso el array de arriba va directo al valor del then
    // Ejemplo tmb con catch
    
    const handleChange = (e)=>{
        setValor(e.target.value)
    }

    const handleClick = ()=>{
        const copia = usuarios.slice(0)
        copia.push(valor)
        setUsuarios(copia)
    } 
   
    return(
        <div>
            <input onChange={handleChange} type="text"/>
            <button onClick ={handleClick}>guardar</button>
            {usuarios.map((item,i)=>{return <p>en el indice {i} esta {item}</p>})}
        </div>
    )
}

export default FormContainer








