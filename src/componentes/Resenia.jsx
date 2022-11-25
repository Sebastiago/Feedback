import { useState } from 'react'
//import { FaTimes } from 'react-icons/fa'

const Resenia = ({ resenia, deleteResenia }) => {

    //Definir estados iniciales
    const [rating , setRating] = useState(resenia.rating)
    const [coment , setComent] = useState(resenia.text)

    //cambiar el estado del rating
    const addNota = () =>{
        setRating((prev)=>{
            return prev + 1
        })
    }

    const restNota = () =>{
        setRating((prev)=>{
            return prev - 1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                { coment }
            </div>
            <button className="close" onClick={()=>deleteResenia(resenia.id)}>
               Eliminar
            </button>
        </div>
    )
}

export default Resenia