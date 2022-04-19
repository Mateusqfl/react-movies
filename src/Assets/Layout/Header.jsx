import React from 'react'
import { HeaderStilo, ImagemStilo } from '../styled/HeaderStyle'
import img_banner from '../../Assets/Imagem/movie.PNG'

export default function Header({PageTitle}) {
  return (
    <>
    <HeaderStilo>
        <h1>
            {PageTitle}
        </h1>
    </HeaderStilo>
    <ImagemStilo>
    <img src={img_banner} alt="" />
    </ImagemStilo>
    </>
    
    
  )
}
