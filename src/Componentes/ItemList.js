import Item from './Item';

const ItemList =({losProductos})=>{
    
    return(
        <div>
            {losProductos.map((item)=>{
               return <Item key={item.id} item = {item}/>
            })}
        </div>
    )
    }
    

export default ItemList

