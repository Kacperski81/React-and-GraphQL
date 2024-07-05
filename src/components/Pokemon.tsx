import { Pokemon as PokemonType } from "../__generated__/graphql"
import { Image } from './Image'

export function Pokemon({pokemon}: {pokemon: PokemonType}) {

    return (
        <div 
            className="md:w-[49%] bg-white border rounded-lg mb-4 overflow-hidden drop-shadow-lg flex flex-col p-1
        ">

            <div className="bg-[#ecd018] text-center p-[10px]">
                <p className="uppercase font-bold text-white tracking-[4px] drop-shadow-md">{pokemon.name}</p>
            </div>

            <div className="flex flex-row justify-between px-1">
                <span className="bg-[#7bb7b7] text-white font-bold py-1 px-5 mt-2 rounded-lg">
                    <span className="drop-shadow-lg">{pokemon.maxHP}</span>
                </span>
                <span className="bg-[#7bb7b7] text-white font-bold py-1 px-5 mt-2 rounded-lg">
                    <span className="drop-shadow-lg">{pokemon.maxCP}</span>
                </span>
            </div>

            <Image src={pokemon.image || ""} alt={pokemon.name || ""} />

            <div className="flex flex-row justify-between px-1">
                {pokemon.attacks?.special?.slice(0,3).map((item) => {
                    return (
                        <span 
                            key={`${item?.name}-${item?.damage}`}
                            className="w-[30%] bg-[#f16820] rounded-lg px-1 font-semibold text-white flex justify-center items-center "
                        >
                            <span className="text-wrap text-[10px] leading-3 text-center py-2 overflow-auto">{item?.name}</span>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}