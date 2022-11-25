import React from 'react'
import { useState } from 'react'
import Resenias from './data/Resenias'
import ReseniaList from './componentes/ReseniaList'

 function App(){

  //crear estado para arreglo de resenias
  const [ lista_resenias, setListaResenias ] = useState(Resenias)

  //metodo para borrar resenia
  const deleteResenia = id => {
    window.confirm("estas seguro de borrar la reseña")
  }

  return (
    <div className="container">
      <ReseniaList 
        deleteResenia={deleteResenia}
        listaresenias={lista_resenias}/>
    </div>
  )
}

export default App