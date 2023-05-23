import { createContext, useState } from "react";

export const CartContext = createContext();

export const {Provider} = CartContext;
 
const CustomProvider = ({children}) => {

  const [cart,setCart] = useState([]);  

  const clearCart =()=>{
    setCart([])
  }

  const isInCart =(id)=>{
    return cart.find((element)=>element.item.id==id)
  }

  const addToCart =(item, cantidad)=>{
    console.log(item);
    if(isInCart(item.id)){
        const newCart=[...cart]
        for(const element of newCart){
            if(element.item.id==item.id)
            element.cantidad=element.cantidad + cantidad
        }
        setCart(newCart);
    } else{
        setCart(
            [
                ...cart,
                {
                    ...item,
                    cantidad
                }
    
            ]
        )
    } 
  }
  const removeFromCart =(id)=> {
    const newCart = [...cart].filter(elemement => elemement.item.id != id)
    setCart(newCart)
  }

  const getCantidad=()=> {
    let cantidad = 0
    cart.forEach((element)=> cantidad = cantidad + element.cantidad)
    return cantidad
  }

  const getTotal=()=>{
    let total = 0
    cart.forEach((element)=> {
        total = total + (element.cantidad * element.item.price)
    })
    return total
  }

  const context ={
    cart,
    clearCart,
    addToCart,
    removeFromCart,
    getCantidad,
    getTotal
  }

  return (
    <Provider value={context}>
      {children}
    </Provider>
  )
}

export default CustomProvider