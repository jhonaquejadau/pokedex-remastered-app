import React from "react";
import { Search } from "./components";
import { Filter } from "./components/Filter";
import { Pokemons } from "./components/Pokemons";
import { PokedexContextProvider } from "./context/PokedexContext";

export interface PokedexInterface {}

const Pokedex: React.FC<PokedexInterface> = () => {
  return (
    <section className="w-[90%] mx-auto">
      <PokedexContextProvider>
        <Search />
        <Filter/>
        <Pokemons />
      </PokedexContextProvider>
    </section>
  );
};

export default Pokedex;
