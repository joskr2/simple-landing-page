'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const PokemonesPage = () => {
  const { name, id } = useParams()
  return (
    <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
      <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
        <div className="max-w-md ">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{name + " - " + id}</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam accusamus iste libero accusantium ex. Excepturi blanditiis inventore quaerat rem repellat nesciunt perferendis dignissimos, ea laudantium voluptate odit praesentium doloribus expedita!
          </p>
          <div className="mt-10">
            <Link href="/dashboard" className="text-sm font-semibold leading-7 text-indigo-600" >
              <span aria-hidden="true">&larr;</span> Consulta otro pokmon
            </Link>
          </div>
        </div>
      </main>
      <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
        <div className="border-t border-gray-100 bg-gray-50 py-10">
          <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
            <Link href="/">Soporte</Link>
            <svg viewBox="0 0 2 2" aria-hidden="true" className="h-0.5 w-0.5 fill-gray-300">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <a href="#">Estado</a>
            <svg viewBox="0 0 2 2" aria-hidden="true" className="h-0.5 w-0.5 fill-gray-300">
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Link href="/">X</Link>
          </nav>
        </div>
      </footer>
      <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block z-20 ">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt=""
          height={720}
          width={600}
          className="absolute inset-0 h-full w-full object-fit z-20"
        />
      </div>
    </div>
  )
}

export default PokemonesPage