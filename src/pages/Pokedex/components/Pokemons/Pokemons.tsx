import { Loader } from "@/components/Loader";
import { PokemonCard } from "@/components/PokemonCard";
import { PokemonInterface } from "@/models";
import { PokedexContextConsumer } from "../../context/PokedexContext";
import { useContext } from "react";

const PokemonCards = () => {
  const { pokemons } = useContext(PokedexContextConsumer);
  return (
    <>
      {pokemons.length === 0 ? (
        <Loader />
      ) : (
        <div
          className={`${
            pokemons.length < 20 ? "h-[89vh]" : "h-100%"
          } grid grid-cols-6 gap-4 w-full `}
        >
          {pokemons?.map((pokemon: PokemonInterface) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
          })}
        </div>
      )}
    </>
  );
};

export default PokemonCards;
