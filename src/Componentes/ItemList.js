import { useState, useEffect } from 'react';
import Item from './Item';

const ItemList =({losProductos})=>{

    console.log (losProductos)
    // const [catalogo, setCatalogo]= useState(Array.from([2,3,4,5,6,7,8,9,10]))


    return(
        <div>
            {losProductos.map((item)=>{
               return <Item key={item.id} item = {item}/>
            })}
        </div>
    )
    }
    

export default ItemList

