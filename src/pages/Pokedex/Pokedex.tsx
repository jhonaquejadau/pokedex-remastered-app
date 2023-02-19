import { PokemonInterface } from "@/models";
import { all_pokemons } from "@/services/pokemons";
import React, { useEffect, useState } from "react";
import { Search } from "./components";
import { PokemonCards } from "./components/PokemonCards";

export interface PokedexInterface {}

const Pokedex: React.FC<PokedexInterface> = () => {
  //VARIABLES AND METHODS\
  const data = all_pokemons;
  const [loading, setLoading] = useState<boolean>(true)
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [resetPokemons, setResetPokemons] = useState<PokemonInterface[]>([]);

  //COMPONENT LIFECYCLE
  useEffect(() => {
    setPokemons([...data]);
    setResetPokemons([...data]);
    setLoading(false)
  }, []);


  return (
    <section className="w-[90%] mx-auto">
      <Search pokemons={pokemons} setPokemons={setPokemons} resetPokemons={resetPokemons}/>
      <PokemonCards pokemons={pokemons} setPokemons={setPokemons} loading={loading}/>
    </section>
  );
};

export default Pokedex;
