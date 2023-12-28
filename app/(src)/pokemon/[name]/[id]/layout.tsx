import MyHeader from '@/components/commons/header/MyHeader'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { name: string, id: string }
}

export async function generateMetadata(
  { params: { name, id } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  // fetch data
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${pokemon?.species?.name}`,
    openGraph: {
      images: [`https://pokeapi.co/api/v2/pokemon-species/${id}/`, ...previousImages],
    },
    description: pokemon?.species?.name
  }
}
export default function PokemonLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <MyHeader />
        {children}
      </body>
    </html>
  )
}
