import React from 'react';
import Nieto from './Nieto';

const Hijo = ({estadoDelPadre, handleClick,miFuncion}) => {

    const handleClickHijo =()=>{
        handleClick()
    }

  return (
    <div>
      <h4>Hijo</h4>
      <p>El estado del padre es: {estadoDelPadre ? "TRUE":"FALSE"}</p>
      <button onClick={handleClickHijo}>Ejecutar mi función local</button>
      <Nieto miFuncion={miFuncion}/>
    </div>
  )
}

export default Hijo
