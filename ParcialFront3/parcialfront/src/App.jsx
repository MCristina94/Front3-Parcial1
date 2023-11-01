import { useState } from 'react'
import './App.css'
import Formulario from './Componentes/Formulario'
import {fondo} from './Styles/Fondo.module.css'

function App() {

  return (
    <>
     <div className={fondo}>
       <h1 style={{margin: '40px', marginBottom: '20px', color: 'black'}}>Deseamos conocerte mejor!</h1>
       <Formulario/>
     </div>
    </>
  )
}

export default App
