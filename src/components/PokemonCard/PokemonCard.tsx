import { PokemonInterface } from "@/models";
import { PokedexContextConsumer } from "@/pages/Pokedex/context/PokedexContext";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useState } from "react";
import { useContext } from "react";

interface CardInterface {
  pokemon: PokemonInterface;
}

const Cards = ({ pokemon }: CardInterface) => {
  const [hover, setHover] = useState<boolean>(false);
  const { toggleFavorite } = useContext(PokedexContextConsumer);

  const saveIcon = () => {
    if (pokemon.isFavorite ) {
      return (
        <div onClick={() => toggleFavorite(pokemon.id)}>
          <BookmarkAddedIcon className="absolute top-4 right-4 text-slate-600" />
        </div>
      );
    } else if (hover) {
      return (
        <div onClick={() => toggleFavorite(pokemon.id)}>
          <BookmarkAddIcon className="absolute top-4 right-4 text-slate-400" />
        </div>
      );
    }
  };

  return (
    <div
      key={pokemon.id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative text-xl flex flex-col justify-center items-center h-[300px] shadow bg-slate-100 hover:scale-[1.04]`}
    >
      <img
        src={pokemon.img}
        alt="img"
        className="w-40 h-40 hover:scale-[1.03]"
      />
      <h1 className="capitalize font-[400] text-2xl text-left">
        {pokemon.name}
      </h1>
      <p className="text-slate-400 text-sm">N.° {pokemon.id}</p>
      <div
        className={`grid gap-2 p-4 text-center ${
          pokemon.types?.length > 1 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {pokemon.types?.map((type: any, index: number) => {
          return (
            <div
              key={index}
              className={`px-2 rounded capitalize text-slate-100 text-base ${type.type.name}`}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      {saveIcon()}
    </div>
  );
};

export default Cards;
