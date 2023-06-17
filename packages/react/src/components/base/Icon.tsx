import React from 'react'
import IcoMoon, { IconProps } from 'react-icomoon'
import '../../styles/main.css'

import { icons } from '@jasmim-ds/tokens'

// TODO: Fazer a tipagem dos nomes dos ícones disponíveis para utilização
export const Icon: React.FC<IconProps> = (props) => (
  <IcoMoon iconSet={icons} {...props} />
)
