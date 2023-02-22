import React from "react";
import { PokedexContextConsumer } from "../../context/PokedexContext";
import { useContext } from "react";
import { PokemonInterface, PokemonTypesInterface } from "@/models";

export interface FilterInterface {}

const Filter: React.FC<FilterInterface> = () => {
  const { pokemons, types, resetPokemons, setPokemonsFiltered } = useContext(
    PokedexContextConsumer
  );

  const filterByTypes = (type: string) => {
    const filter = pokemons.filter((pokemon: PokemonInterface) =>
      pokemon.types.some(
        (pokemonType: PokemonTypesInterface) => pokemonType.type.name === type
      )
    );
	
    return type === "all"
      ? setPokemonsFiltered(resetPokemons)
      : setPokemonsFiltered(filter)
  };

  return (
    <div className="w-[90%] h-full p-4 mb-8 mx-auto border border-orange-200 rounded shadow-xl ">
      <p className="text-xl text-center text-slate-400 font-[500] uppercase">
        Below there are options allowing you to make a better search...
      </p>
      <div className="relative flex flex-row overflow-auto w-full h-full py-4 shadow gap-2">
	  <button onClick={() => filterByTypes("all")} className="text-base shadow rounded border border-orange-500 px-6">Reset</button>
		{types?.map((type: PokemonTypesInterface, index: number) => {
          return (
            <button
              key={index}
              onClick={() => filterByTypes(type.name)}
              className={`${type.name} py-1 px-6 rounded-md text-xs text-white font-medium hover:scale-[1.06]`}
            >
              {type.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
