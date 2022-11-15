import React from 'react'

 const App = ()=>{

    const bootcamps = [
        {
            id:1,
            name:'Php bootcamp',
            average_rating: 8
        },
        {
            id:2,
            name:'Js bootcamp',
            average_rating: 10
        }
    ]

  return (
    <div>
        <h1>Listado de bootcamps</h1>
        <ul>
            { bootcamps.map((bootcamp, index) => (
                <li key={index}>{ bootcamp.name }</li>
            )) }
        </ul>
    </div>
  )
}

export default App