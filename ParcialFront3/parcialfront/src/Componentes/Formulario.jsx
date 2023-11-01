import React, { useState } from 'react'
import Card from './Card'

const Formulario = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        cancion: '',
        pelicula: '',
        libro: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSumbit = (event) => {
        event.preventDefault()
        
        if(usuario.nombre.length > 3 && usuario.cancion.length > 6 && usuario.pelicula.length > 3 && usuario.libro.length > 6){
            setShow(true)
            setError(false)
        } else {
            setError(true)
            setShow(false)
        }
    }
  return (
    <div>
        {!show &&
        <form onSubmit={handleSumbit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <label>Nombre:</label>
            <input type="text" placeholder='Ingresa tu nombre' value = {usuario.nombre} onChange={(event) => setUsuario({...usuario, nombre: event.target.value})}/>

            <label>Canción favorita:</label>
            <input type="text" placeholder='Ingresa tu canción favorita' value = {usuario.cancion} onChange={(event) => setUsuario({...usuario, cancion: event.target.value})}/>

            <label>Pelicula favorita:</label>
            <input type="text" placeholder='Ingresa tu peli favorita' value = {usuario.pelicula} onChange={(event) => setUsuario({...usuario, pelicula: event.target.value})}/>

            <label>Libro favorito:</label>
            <input type="text" placeholder='Ingresa tu libro favorito' value = {usuario.libro} onChange={(event) => setUsuario({...usuario, libro: event.target.value})}/>

            <button>Enviar</button>
        </form>}
        {show && <Card nombre = {usuario.nombre} cancion = {usuario.cancion} pelicula = {usuario.pelicula} libro ={usuario.libro}/>}
        {error && <h4 style={{color: 'red' , backgroundColor: 'rgba(128, 128, 128, 0.8)'}}>Por favor chequea que la información sea correcta</h4>}
    </div>
  )
}

export default Formulario