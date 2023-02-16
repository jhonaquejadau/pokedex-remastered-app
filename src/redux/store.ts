import { PokemonInterface, UserInterface } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "./states/user";
import PokemonsSliceReducer from "./states/pokemons";

export interface StoreInterface {
  user: UserInterface;
  pokemons: PokemonInterface
}

export default configureStore<StoreInterface>({
  reducer: {
    user: UserSliceReducer,
    pokemons: PokemonsSliceReducer,
  },
});
