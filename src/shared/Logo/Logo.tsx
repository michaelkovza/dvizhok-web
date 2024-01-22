import Image from 'next/image'
import React from 'react'
import DvizhokLogo from '../../../public/dvizhok.svg'

export function Logo() {
  return <Image src={DvizhokLogo} alt="Движок лого" />
}
