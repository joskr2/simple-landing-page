'use client'

import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import MyDialog from '../../home/dialog/MyDialog'
import { signIn, signOut, useSession } from 'next-auth/react'

const misRutas = [
  { name: 'Inicio', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Contactame', href: '/contactame' },
  { name: 'Info', href: '/info' },
]

export default function MyHeader() {
  const [abrirMenuHamburguesa, setAbrirMenuHamburguesa] = useState(false)
  const { data: session } = useSession()


  const rutas = session ? misRutas : misRutas.filter(({ name }) => name !== 'Dashboard')

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

          {rutas.map(({ name, href }) => (
            <Link key={name} href={href} className="text-sm font-semibold leading-6 text-gray-900">
              {name}
            </Link>
          ))}

        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            {session ? (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => signOut({
                  callbackUrl: '/'
                })}
              >
                Cerrar sesión
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={() => signIn()}
              >
                Iniciar sesión
              </button>
            )}
          </span>
        </div>
      </nav>
      <MyDialog rutas={rutas} open={abrirMenuHamburguesa} setOpen={setAbrirMenuHamburguesa} />
    </header>
  )
}
