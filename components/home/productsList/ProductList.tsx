import Image from 'next/image'
import React, { FC } from 'react'

interface ProductListProps {
  products: Array<{ id: number, name: string, href: string, imageSrc: string, imageAlt: string, price: string, color: string }>
}

const ProductList: FC<ProductListProps> = (
  { products }
) => {
  return (
    <div className="bg-white w-[80vw]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Mis proyectos</h2>

        <div className="mt-9 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map(({ id, imageAlt, imageSrc, href, name, color, price }) => (
            <div key={id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  width={200}
                  height={200}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList