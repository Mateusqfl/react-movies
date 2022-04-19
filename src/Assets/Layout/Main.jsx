// Componente 'Main' com todos seus imports(API,Style,IMG)

import React from 'react'
import { allfilmes } from '../data/filmes'
import imgMovie from '../Imagem/fde04f56-1afb-4c71-9ff2-97dac723f8d8.jpg'

import { MainContainer, MainUl } from '../styled/MainStyle'
import { StiloContainerMovie } from '../styled/StyledContainerMovie'

export default function Main( ) {
  return (
   <MainContainer >
       <h2>Filmes Populares</h2>


  <MainUl>
  
      {
  
      allfilmes.map( filmes => (
        <StiloContainerMovie key = {filmes.id}>
          <img src={imgMovie} alt="" />
          <p>Título: {filmes.name}</p>
          <p>Nota: {filmes.Nota}</p>
        </StiloContainerMovie>
  
      ))}
  
  </MainUl>

   </MainContainer>
  )
}
