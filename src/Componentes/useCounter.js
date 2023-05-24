import {useState} from 'react'

const useCounter =()=>{

    const [stock,setStock] = useState(10);
    const [contador,setContador] = useState(0);

    const sumar = stock > 0;
    const restar = stock < 10 && stock >= 0;
    
    const initial = ()=>{
        contador = initial;
        stock = 10 - contador;
    }

    const handleSumar =()=>{
        if (sumar) {
            setContador(contador + 1)
            setStock(stock - 1)
        }
     }
    const handleRestar =()=>{
        if (restar) {
            setContador(contador - 1)
            setStock(stock + 1)
        }
    }

const loQueRetorno ={
    contador : contador,
    sumar: handleSumar,
    restar: handleRestar,
    stock: stock,
    initial: initial
}
    return loQueRetorno
}

export default useCounter