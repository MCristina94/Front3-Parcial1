import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h3>Hola {props.nombre}!!! gracias por compartirnos tus gustos</h3>
        <h4>Wow, {props.cancion} es una buena canción</h4>
        <h4>Nos encanta saber que te gusta pelis como {props.pelicula}</h4>
        <h4>{props.libro} es una excelente opción para leer</h4>

        
    </div>
  )
}

export default Card

