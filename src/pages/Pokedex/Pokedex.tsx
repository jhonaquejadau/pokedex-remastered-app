import { Loader } from "@/components/Loader";
import { PokemonInterface } from "@/models";
import { setPokemons } from "@/redux/states/pokemons";
import { getPokemonsData } from "@/services/pokemons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonCards } from "./components/PokemonCards";

export interface PokedexInterface {}

const Pokedex: React.FC<PokedexInterface> = () => {
  const dispatcher = useDispatch();

  const getPokemons = async () => {
    const pokemons_part_one: any = await getPokemonsData(
      "Wk3Q6XDrYVsvVa557HYG"
    );
    const pokemons_part_two: any = await getPokemonsData(
      "r0Y5v56I0qMV1CKHoPs2"
    );
    const data = JSON.parse(pokemons_part_one.part_one).concat(
      JSON.parse(pokemons_part_two.part_two)
    );

    dispatcher(setPokemons(data));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const pokemons = useSelector((store: any) => store.pokemons);

  if (pokemons.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <p>POKEDEX WORKING!!</p>
      <div className="grid grid-cols-6 gap-4  w-[90%] mx-auto">
        {pokemons?.map((data: PokemonInterface) => {
          return <PokemonCards key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};

export default Pokedex;
