// Componente 'Footer' com todos seus imports(Style)

import React from 'react'
import { FooterStilo } from '../styled/FooterStyle'

export default function Footer() {
  return (
    <FooterStilo>
        <p>
            React Movies @ 2022. Todos os direitos reservados.
        </p>
    </FooterStilo>
  )
}
