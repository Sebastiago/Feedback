import { useState } from 'react'
//import { FaTimes } from 'react-icons/fa'

const Resenia = ({ resenia, deleteResenia }) => {

    //Definir estados iniciales
    const [rating , setRating] = useState(resenia.rating)
    const [coment , setComent] = useState(resenia.text)

    return (
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                { coment }
            </div>
            <button className="btn-danger close" onClick={()=>deleteResenia(resenia.id)}>
               X
            </button>
        </div>
    )
}

export default Resenia