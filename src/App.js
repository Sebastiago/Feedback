import React from 'react'
import { useState } from 'react'
import Resenias from './data/Resenias'
import ReseniaList from './componentes/ReseniaList'

 function App(){

  //crear estado para arreglo de resenias
  const [ lista_resenias, setListaResenias ] = useState(Resenias)
  console.log(lista_resenias)

  return (
    <div className="container">
      <ReseniaList listaresenias={lista_resenias}/>
    </div>
  )
}

export default App