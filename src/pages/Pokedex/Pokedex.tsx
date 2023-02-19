import { PokemonInterface } from "@/models";
import { getPokemonsData } from "@/services/pokemons";
import React, { useEffect, useState } from "react";
import { Search } from "./components";
import { PokemonCards } from "./components/PokemonCards";

export interface PokedexInterface {}

const Pokedex: React.FC<PokedexInterface> = () => {
  //VARIABLES AND METHODS
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [resetPokemons, setResetPokemons] = useState<PokemonInterface[]>([]);

  const getPokemonData = async () => {
    const pokemons_part_one: any = await getPokemonsData(
      "Wk3Q6XDrYVsvVa557HYG"
    );
    const pokemons_part_two: any = await getPokemonsData(
      "r0Y5v56I0qMV1CKHoPs2"
    );
    const data = JSON.parse(pokemons_part_one.part_one).concat(
      JSON.parse(pokemons_part_two.part_two)
    );
    setPokemons([...data]);
    setResetPokemons([...data]);
    setLoading(false);
  };

  //COMPONENT LIFECYCLE
  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <section className="w-[90%] mx-auto">
      <Search
        pokemons={pokemons}
        setPokemons={setPokemons}
        resetPokemons={resetPokemons}
      />
      <PokemonCards
        pokemons={pokemons}
        setPokemons={setPokemons}
        loading={loading}
      />
    </section>
  );
};

export default Pokedex;
