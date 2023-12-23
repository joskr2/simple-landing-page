import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { URLPOKEMON } from '../../../constans'
import { SimplePokemon } from '@/interfaces/simple-pokemon'
import { PokemonResponse } from '@/interfaces/pokemon-response'

// const getPokemons = async () => {
//   try {
//     const data = await fetch(
//       'https://pokeapi.co/api/v2/pokemon/?limit=100'
//     ).then(
//       res => res.json()
//     )
//     return data
//   } catch (error) {
//     console.error(error)
//   }
// }

const getPokemon = async (url: string): Promise<SimplePokemon[]> => {
  const { results }: PokemonResponse = await fetch(url).then(
    res => res.json()
  )
  const pokemons = results.map(pokemon => ({
    name: pokemon.name,
    id: pokemon?.url?.split('/')[6]
  }))
  return pokemons
}


// const postPokemon = async (url:string,newPokemon:string) => {
//   const data = await fetch(url,{
//     method:'POST',
//     body:JSON.stringify({
//       name:newPokemon
//     })
//   }).then(
//     res => res.json()
//   )
//   return data
// }

export const Pokemones = async () => {
  const pokemons = await getPokemon(URLPOKEMON)
  return (
    <div className="bg-white">
      <h2 className=" mx-auto text-3xl pb-3 px-4 ">Pokemones</h2>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {pokemons.map(({ name, id }) => (
            <Link key={id} href={`/pokemon/${name}/${id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                  alt={name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-md text-center m-auto text-gray-700">{name.toUpperCase()}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
