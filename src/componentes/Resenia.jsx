import { useState } from 'react'

const Resenia = ({ resenia }) => {

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
            <button className="btn btn-primary" onClick={ addNota } >
                Sumar nota
            </button>||
            <button className="btn btn-secondary" onClick={ restNota } >
                Restar nota
            </button>
        </div>
    )
}

export default Resenia