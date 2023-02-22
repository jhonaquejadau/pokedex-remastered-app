import { PokemonInterface, PokemonTypesInterface } from "@/models";
import { getPokemonsData } from "@/services/pokemons";
import { createContext, useEffect, useState } from "react";

const PokedexContext = createContext<any>(null);

const PokedexContextProvider = ({ children }: any) => {
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState<PokemonInterface[]>([]);
  const [resetPokemons, setResetPokemons] = useState<PokemonInterface[]>([]);
  const [types, setTypes] = useState<PokemonTypesInterface[]>([]);
  const [searchActivate, setSearchActive] = useState<boolean>(false)

  function toggleFavorite(id: number) {
    setPokemons((prev: PokemonInterface[]) => {
      return prev.map((pokemon: PokemonInterface) => {
        return pokemon.id === id
          ? { ...pokemon, isFavorite: !pokemon.isFavorite }
          : { ...pokemon };
      });
    });
    setPokemonsFiltered((prev: PokemonInterface[]) => {
      return prev.map((pokemon: PokemonInterface) => {
        return pokemon.id === id
          ? { ...pokemon, isFavorite: !pokemon.isFavorite }
          : { ...pokemon };
      });
    });
  }

  const getPokemonData = async () => {
    //Getting pokemon data from firebase
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

    //Getting pokemon types from PokeAPI
    const resTypes = await fetch("https://pokeapi.co/api/v2/type");
    const dataTypes = await resTypes.json();

    //Setting state with new data
    setPokemons(data_formated);
    setPokemonsFiltered(data_formated);
    setResetPokemons(data_formated);
    setTypes(dataTypes.results.slice(0, 18));
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <PokedexContext.Provider
      value={{
        pokemons,
        pokemonsFiltered,
        resetPokemons,
        types,
        searchActivate,
        setSearchActive,
        setPokemonsFiltered,
        setPokemons,
        toggleFavorite,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export { PokedexContextProvider, PokedexContext as PokedexContextConsumer };
