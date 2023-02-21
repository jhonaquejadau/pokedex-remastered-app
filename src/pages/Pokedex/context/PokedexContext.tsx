import { PokemonInterface } from "@/models";
import { getPokemonsData } from "@/services/pokemons";
import { createContext, useEffect, useState } from "react";

const PokedexContext = createContext<any>(null);

const PokedexContextProvider = ({ children }: any) => {
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [resetPokemons, setResetPokemons] = useState<PokemonInterface[]>([]);

  function toggleFavorite(id: number) {
    setPokemons((prev: PokemonInterface[]) => { 
        return prev.map((pokemon: PokemonInterface) => {
            return pokemon.id === id ? {...pokemon, isFavorite: !pokemon.isFavorite} : {...pokemon}
        })
    });
  }

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
    const data_formated = data.map((data: PokemonInterface) => {
      return { ...data, isFavorite: false };
    });
    setPokemons(data_formated);
    setResetPokemons(data_formated);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <PokedexContext.Provider
      value={{ pokemons, resetPokemons, setPokemons, toggleFavorite }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export { PokedexContextProvider, PokedexContext as PokedexContextConsumer };
