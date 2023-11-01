import React from 'react'

const Card = (props) => {
  return (
    <div>
      <article  style={{color: 'black', paddingBottom: '50px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
        <h3 style={{fontWeight: 'normal'}}>Hola <strong>{props.nombre}</strong>!!! gracias por compartirnos tus gustos</h3>
        <h4 style={{fontWeight: 'normal'}}>Wow, <strong>{props.cancion}</strong> es una buena canción</h4>
        <h4 style={{fontWeight: 'normal'}}>Nos encanta saber que te gusta pelis como <strong>{props.pelicula}</strong></h4>
        <h4 style={{fontWeight: 'normal'}}> <strong>{props.libro}</strong>  es una excelente opción para leer</h4>
      </article>
        
    </div>
  )
}

export default Card

