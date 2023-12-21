import React from 'react'
import Image from 'next/image'

const HeaderSection = () => {
  return (
    <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
      <Image
        className="inline-block rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
        width={250}
        height={250}
      />
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Roberto Ramirez</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
      </div>
    </div>
  )
}

export default HeaderSection