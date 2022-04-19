// Página do site

import React from 'react'
import Header from '../Layout/Header'
import Main from '../Layout/Main'
import Footer from '../Layout/Footer'
import { allfilmes } from '../data/filmes'


export default function HomePage() {
console.log(allfilmes)

  return (
    <>
    <Header PageTitle = 'Home'/>
    <Main/>
    <Footer/>
    </>
   
  )
}
