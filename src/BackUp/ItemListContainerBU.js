import ItemList from "./ItemList"
import {useState} from "react"

// let productos = [];
// productos=loQueTrajeDeLaApi.then
const [dark,setDark] = useState(true);
console.log(dark);
console.log(setDark);


const ItemListContainer = () => {

  const [valor, setValor] = useState(1)
  const handleClick = () =>{
    console.log("click");
    setValor(10)
  }
  const [dark,setDark] = useState(true);
  console.log(dark);
  console.log(setDark);
    const otroEstadoCompleto = useState("")
    const handleChangeDark=()=>{
      console.log("click");
      setDark(!dark);
    }

    return (
        <div className={`${dark}`}>
        <p>{valor}</p>
        <p>{`${dark}`}</p>
        <button id="btn" onClick={handleClick}>click</button>
        <button id="btn" onClick={handleChangeDark}>cambiar a modo dark</button>
        </div>
        
    )}


export default ItemListContainer