import React, { useState } from 'react'

const Formulario = () => {
    const [estudiante, setEstudiante] = useState({
        id: '',
        nombre: '',
        curso: ''
    });
    
  return (
    <div>
        <form>
            <label>Id:</label>
            <input type="text" value={estudiante.id} />

            <label>Nombre:</label>
            <input type="text" value={estudiante.nombre}/>

            <label>Curso:</label>
            <input type="text" value={estudiante.curso}/>
        </form>
    </div>
  )
}

export default Formulario