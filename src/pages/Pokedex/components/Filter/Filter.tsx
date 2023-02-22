import React, { useState } from "react";
import { PokedexContextConsumer } from "../../context/PokedexContext";
import { useContext } from "react";
import { PokemonInterface, PokemonTypesInterface } from "@/models";

export interface FilterInterface {}

const Filter: React.FC<FilterInterface> = () => {
  const options = ["Lower Number", "Higher Number", "A-Z", "Z-A", "Reset"];
  const { pokemons, types, resetPokemons, setPokemonsFiltered, pokemonsFiltered } = useContext(
    PokedexContextConsumer
  );

  console.log(pokemonsFiltered);
  
  

  const filterByTypes = (type: string) => {
    const filter = pokemons.filter((pokemon: PokemonInterface) =>
      pokemon.types.some(
        (pokemonType: PokemonTypesInterface) => pokemonType.type.name === type
      )
    );

    return type === "all"
      ? setPokemonsFiltered(resetPokemons)
      : setPokemonsFiltered(filter);
  };

  const handleOptionFilter = (option: string) => {
    let sorted: [] = [];
    if (option === "Lower Number") {
      sorted = pokemons
        .map((pokemon: PokemonInterface) => pokemon)
        .sort((a: PokemonInterface, b: PokemonInterface) =>
          a.id > b.id ? 1 : -1
        );
    } else if (option === "Higher Number") {
      sorted = pokemons
        .map((pokemon: PokemonInterface) => pokemon)
        .sort((a: PokemonInterface, b: PokemonInterface) =>
          a.id > b.id ? -1 : 1
        );
    } else if (option === "A-Z") {
      sorted = pokemons
        .map((pokemon: PokemonInterface) => pokemon)
        .sort((a: PokemonInterface, b: PokemonInterface) =>
          a.name > b.name ? 1 : -1
        );
    } else if (option === "Z-A") {
      sorted = pokemons
        .map((pokemon: PokemonInterface) => pokemon)
        .sort((a: PokemonInterface, b: PokemonInterface) =>
          a.name > b.name ? -1 : 1
        );
    } else {
      sorted = resetPokemons;
    }
    setPokemonsFiltered(sorted);
  };

  return (
    <div className="w-[90%] h-full p-4 mb-8 mx-auto border border-orange-200 rounded shadow-xl ">
      <p className="text-xl text-center text-slate-400 font-[500] uppercase">
        Below there are options allowing you to make a better search...
      </p>
      <div className="relative flex flex-row overflow-auto w-full h-full py-4 shadow gap-2">
        <button
          onClick={() => filterByTypes("all")}
          className="text-base shadow rounded border border-orange-500 px-6"
        >
          Reset
        </button>
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
      <div className="flex flex-row justify-evenly w-[50%] h-full mx-auto my-4 p-4 shadow text-center">
        <p className="font-bold text-slate-600">Order by:</p>
        {options.map((option: string, index: number) => (
          <div
            key={index}
            className="px-4 rounded border bg-slate-200 hover:cursor-pointer hover:scale-[1.06] hover:bg-slate-400"
            onClick={() => handleOptionFilter(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
