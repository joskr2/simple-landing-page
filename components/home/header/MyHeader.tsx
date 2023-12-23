'use client'

import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import MyDialog from '../dialog/MyDialog'
import misRutas from './routes'

export default function MyHeader() {
  const [abrirMenuHamburguesa, setAbrirMenuHamburguesa] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Mi portafolio</span>
            <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" width={32} height={32} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setAbrirMenuHamburguesa(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {misRutas.map(({ name, href }) => (
            <Link key={name} href={href} className="text-sm font-semibold leading-6 text-gray-900">
              {name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Acceder <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <MyDialog rutas={misRutas} open={abrirMenuHamburguesa} setOpen={setAbrirMenuHamburguesa} />
    </header >
  )
}
