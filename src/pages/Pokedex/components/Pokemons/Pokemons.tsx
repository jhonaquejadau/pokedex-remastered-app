import { Loader } from "@/components/Loader";
import { PokemonCard } from "@/components/PokemonCard";
import { PokemonInterface } from "@/models";
import { useContext } from "react";
import { PokedexContextConsumer } from "../../context/PokedexContext";

const PokemonCards = () => {
  const { pokemons, pokemonsFiltered, searchActivate } = useContext(
    PokedexContextConsumer
  );
  const pokemonsData =
    !searchActivate && pokemonsFiltered ? pokemonsFiltered : pokemons;
  return (
    <>
      {pokemons.length === 0 ? (
        <Loader />
      ) : (
        <div
          className={`${
            pokemonsData.length < 20 ? "h-[89vh]" : "h-100%"
          } grid grid-cols-6 gap-4 w-full `}
        >
          {pokemonsFiltered?.map((pokemon: PokemonInterface) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
      )}
    </>
  );
};

export default PokemonCards;
