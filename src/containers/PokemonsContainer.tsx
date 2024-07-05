import { useQuery } from "@apollo/client"
import { GET_POKEMONS } from "../graphql/get-pokomons"
import { Pokemon } from "../components/Pokemon"
import { Pokemon as PokemonType } from "../__generated__/graphql"

export function PokemonsContainer() {
    const { loading, error, data } = useQuery(GET_POKEMONS, {
        variables: {first: 9}
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>
    console.log(data)
    return (
        <div className="max-w-[550px] flex flex-row flex-wrap justify-center md:gap-2">
            {data.pokemons.map((pokemon: PokemonType) => {
                return (
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                )
            })}
        </div>
    )
}