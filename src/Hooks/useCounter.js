import {useState} from 'react'

const useCounter =()=>{
    const [contador,setContador] = useState(0)

    const handleSumar =()=>{
        setContador(contador + 1)
    }
    const handleRestar =()=>{
        setContador(contador - 1)
    }

const loQueRetorno ={
    valor : contador,
    sumar: handleSumar,
    restar: handleRestar
}
//La variable no es necesaria, para la redundancia

    return loQueRetorno
}

export default useCounter





