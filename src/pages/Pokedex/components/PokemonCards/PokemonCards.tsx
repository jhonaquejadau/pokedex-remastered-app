import { Loader } from "@/components/Loader";
import { PokemonInterface } from "@/models";

const PokemonCards = ({ pokemons }: any) => {
  console.log(pokemons)
  return (
    <>
      {pokemons.length === 0 ? (
        <Loader />
      ) : (
        <div className={`${pokemons.length <20 ? 'min-h-screen' : 'h-100%'} grid grid-cols-6 gap-4 w-full `}>
          {pokemons?.map((pokemon: PokemonInterface) => {
            return (
              <div
                key={pokemon.id}
                className={`relative text-xl flex flex-col justify-center items-center h-[300px] shadow bg-slate-100 hover:scale-[1.04]`}
              >
                <img
                  src={pokemon.img}
                  alt="img"
                  className="w-48 h-48 hover:scale-[1.06]"
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
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PokemonCards;
