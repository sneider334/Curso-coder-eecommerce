import { useState, useEffect } from 'react';
import Item from './Item';

const ItemList =({products})=>{

    console.log (products)
    const [catalogo, setCatalogo]= useState(Array.from([2,3,4,5,6,7,8,9,10]))


    return(
        <div>
            <Item/>
            {catalogo.map((item)=>{
                <Item key={item.id}>Item {item}</Item>
            })}
        </div>
    )
    }
    

export default ItemList

