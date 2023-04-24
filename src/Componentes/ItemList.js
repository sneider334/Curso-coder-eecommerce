import { useState, useEffect } from 'react';

const ItemList =()=>{
    
    const [usuarios,setUsuarios] = useState("")
    
    const productos = [
        {id : '1', name : 'Garrafa 1', price:100},
        {id : '2', name : 'Garrafa 2', price:200},
        {id : '3', name : 'Garrafa 3', price:300},
    ]

    useEffect(()=>{
        const pedido = new Promise((res, rej) =>{
            setTimeout(()=>{
                res(productos);
                rej ("error")
            },2000)
        })
        pedido
        .then((resultado) =>{
            console.log(resultado)
            setUsuarios(resultado)
        })
        .catch((err) =>console.log(err));
        pedido.finally(()=>console.log("finished"))
    },[])
}

export default ItemList

