import { useState } from "react"

const Cart =()=>{

    const [value, setValue] = useState("")

    const handleClick =()=>{
        console.log("clicked")
        console.log(value)
    }

    const handleChange =(e)=>{
        setValue(e.target.value)
    }

    return(
        <div>
        {/* <button onClick={handleClick()}></button> */}
        <input type="text" onChange={handleChange} placeholder="Nombre" value={value}></input>
        <button onClick={handleClick} data-x="true">Click 1</button>
        <button onClick={function(){console.log("clicked")}}>Click 2</button>
        <button onClick={()=>console.log("anónima")}>Click 3</button>
        </div>
    )
    // Estos son formularios controlados, la otra manera es con el useRef

}
export default Cart



