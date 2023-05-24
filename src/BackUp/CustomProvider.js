import { createContext, useState } from "react";
import React from 'react'

// const valorDelContexto = {username:"xdxd", loggedIn: true}

export const contexto = createContext();

export const {Provider} = contexto;
// Esto es lo mismo que lo de arriba const Provider = contexto.Provider
// en vez de poner const l = useContext(contexto)
//const nombre = l.nombre

const CustomProvider = ({children}) => {

  const [nombre,setNombre] = useState("Santiago");
  const guardarEnCarrito = (producto,cantidad)=>{
    console.log("Guardar en carrito")
    setNombre("Otro nombre")
  }

    const valorDelContexto = {
      nombre: nombre,
      carrito: [],
      guardarEnCarrito: guardarEnCarrito
    }

  return (
    <Provider value={valorDelContexto}>
      {children}
    </Provider>
  )
}

export default CustomProvider
