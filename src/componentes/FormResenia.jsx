import Rating from './Rating'
import { useState } from 'react'

const FormResenia = ({addResenia}) => {

    //estados para rating y texto
    const [rating, setRating]= useState(10)
    const [text, setText]= useState('')

    //metodo cmbiar estado dl texto
    const cambiarTexto = (e) => {
        setText(e.target.value)
    }

    //meodo para controlar el submit del form
    const ctrlSubmit = (e)=>{
        e.preventDefault()
        //crear un objeto resenia
        let newResenia = {
            rating,
            text
        }
        //añadir la nueva resenia al arreglo
        addResenia(newResenia)
    }

    return(
        <div className="card">
            <form onSubmit={ctrlSubmit}>
                <h2>Como calificarioas el curso?</h2>
                <Rating setRating={setRating}/>
                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Escriba su comentario"
                        onChange={cambiarTexto} />

                    <button type="submit" className='btn btn-primary'>Registrar</button>
                </div>               
            </form>
        </div>
    )
}

export default FormResenia