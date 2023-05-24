import { useRef } from "react";

const Cart = ()=>{

    const nameRef = useRef;
    const emailRef = useRef;

    const handleClick=()=>{
        const nombre = nameRef.current.value;
        const email = emailRef.current.value;

        const usuario = { nombre, email }
        console.log (usuario)
    }
    
    handleChange =(e)=>{
        e.preventDefault()
        console.log ("key down",e.key);
        e.handleStopPropagation()
    }

    const handleStopPropagation = (e)=>{
        console.log("click en div")  
    }

    return(
        <div onClick={handleStopPropagation}>
            <div>
                <label htmlFor="">Name</label>
                <input ref={nameRef} type="text" onKeyDown={handleChange}></input>
            </div>
            <div>
                <label htmlFor="">email</label>
                <input ref={emailRef} type="email"></input>
            </div>
            <button onClick={handleClick}>ver en consola</button>
        </div>
    )
}
export default Cart