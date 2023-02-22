import { PokemonInterface } from "@/models";
import { useContext, useState } from "react";
import { PokedexContextConsumer } from "../../context/PokedexContext";

const Search = () => {
  const [input, setInput] = useState("");
  const { pokemons, resetPokemons, setPokemons, setSearchActive } = useContext(
    PokedexContextConsumer
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setInput(value);

    if (value === "") {
      setPokemons(resetPokemons);
    } else {
      setPokemons(
        pokemons.filter((pokemon: PokemonInterface) =>
          pokemon.name.includes(value)
        )
      );
    }

    if (value.length > 1) {
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
  };

  return (
    <div className="w-full py-8 text-center text-[1.5rem]">
      <p className="text-[2.5rem]">
        <span className="font-bold">1008 </span>Pokemons for you to enjoy!
      </p>
      <p>
        Create a profile or login if you already has one, to see your favorites
        pokemons...
      </p>
      <input
        type="text"
        placeholder="Search pokemon..."
        className="w-[60%] mt-4 border-b-[1px] border-black bg-transparent focus:outline-none focus:placeholder-transparent"
        value={input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
