import React from 'react'
import { useState } from 'react'
import Resenias from './data/Resenias'
import ReseniaList from './componentes/ReseniaList'
import FormResenia from './componentes/FormResenia'

 function App(){

  //crear estado para arreglo de resenias
  const [ lista_resenias, setListaResenias ] = useState(Resenias)

  //metodo para borrar resenia
  const deleteResenia = id => {
    if(window.confirm("estas seguro de borrar la reseña")){
      //borrar resenia por id
      setListaResenias(lista_resenias.filter((resenia)=> resenia.id !== id ))
    }
  }

  //añadir nueva resenia
  const addResenia = (newResenia) => {
    //id a resenia
    newResenia.id = lista_resenias.length + 1
    setListaResenias( [newResenia, ...lista_resenias ])
  }

  return (
    <div className="container">
      <FormResenia addResenia={addResenia}/>
      <ReseniaList 
        deleteResenia={deleteResenia}
        listaresenias={lista_resenias}/>
    </div>
  )
}

export default App