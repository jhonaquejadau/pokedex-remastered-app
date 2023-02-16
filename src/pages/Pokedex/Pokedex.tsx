import { Loader } from "@/components/Loader";
import { PokemonInterface } from "@/models";
import { pokemons_data } from "@/services/pokemons";
import React, { useEffect, useState } from "react";
import { Search } from "./components";
import { PokemonCards } from "./components/PokemonCards";

export interface PokedexInterface {}

const Pokedex: React.FC<PokedexInterface> = () => {
  //VARIABLES AND METHODS\
  const data = pokemons_data;
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
      <Search />
      <PokemonCards pokemons={pokemons} loading={loading}/>
    </section>
  );
};

export default Pokedex;
