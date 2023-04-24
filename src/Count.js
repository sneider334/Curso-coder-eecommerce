import {useState} from 'react'
import useCounter from './Hooks/useCounter'

const Counter =({children})=>{
    
    const {valor,sumar,restar}= useCounter()
    
    console.log(valor)


    return(
        <div>
            <h2>ItemCount</h2>
            <p> Contador :{valor}</p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            {children}
        </div>
    )
}
export default Counter






