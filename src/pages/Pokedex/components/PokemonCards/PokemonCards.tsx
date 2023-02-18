import { Loader } from "@/components/Loader";
import { PokemonInterface } from "@/models";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PokemonCards = ({ pokemons }: any) => {
  const user = useSelector((store: any) => store.user)
  console.log(user)
  const navigate = useNavigate()
  const addFavorite = (data: PokemonInterface) => {
    const add = document.getElementById(`add-${data.id}`);
    const added = document.getElementById(`added-${data.id}`)
    if(user.name) {
      add?.classList.remove('show')
      add?.classList.add('hidde')
      added?.classList.remove('hidde')
      added?.classList.remove('show')
    } else {
      navigate('/login')
    }
    
  };

  const removeFavorite = (data: PokemonInterface) => {
    const add = document.getElementById(`add-${data.id}`);
    const added = document.getElementById(`added-${data.id}`)
    added?.classList.remove('show')
    added?.classList.add('hidde')
    add?.classList.remove('hidde')
    add?.classList.remove('show')
  };

  return (
    <>
      {pokemons.length === 0 ? (
        <Loader />
      ) : (
        <div
          className={`${
            pokemons.length < 20 ? "min-h-screen" : "h-100%"
          } grid grid-cols-6 gap-4 w-full `}
        >
          {pokemons?.map((pokemon: PokemonInterface) => {
            return (
              <div
                key={pokemon.id}
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
                <div
                  id={`add-${pokemon.id}`}
                  onClick={() => addFavorite(pokemon)}
                  className="show absolute top-4 right-4"
                >
                  <BookmarkAddIcon className=" text-slate-300 " />
                </div>
                <div onClick={() => removeFavorite(pokemon)} id={`added-${pokemon.id}`} className="hidde absolute top-4 right-4">
                  <BookmarkAddedIcon className="text-slate-600" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PokemonCards;
