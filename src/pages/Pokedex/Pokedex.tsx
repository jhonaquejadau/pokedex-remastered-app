import React from "react";
import { Search } from "./components";
import { Pokemons } from "./components/Pokemons";
import { PokedexContextProvider } from "./context/PokedexContext";

export interface PokedexInterface {}

const Pokedex: React.FC<PokedexInterface> = () => {
  return (
    <section className="w-[90%] mx-auto">
      <PokedexContextProvider>
        <Search />
        <Pokemons />
      </PokedexContextProvider>
    </section>
  );
};

export default Pokedex;
