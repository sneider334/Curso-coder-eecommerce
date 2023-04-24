
import {useState} from "react"
import ItemList from "./ItemList"

const ItemListContainerr = ({greeting}) => {

    return (
        <>
        <h3>{greeting}</h3>
        <ItemList/>
        </>
        
    )}


export default ItemListContainerr