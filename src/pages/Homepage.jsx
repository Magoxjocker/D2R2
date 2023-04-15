
import React from 'react'
import Galeria from '../components/Galeria'
import Footer from '../components/Footer'

const HomePage = () => {

  return (
    <div>
      <header>
        <img className='img-header' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" />
        <p className='subtitle'>Rick y Morty (en inglés: Rick and Morty) es una serie de televisión americana de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Dan Harmon, el co-creador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.</p>
      </header>
      <Galeria />
    </div>
  )
}

export default HomePage
