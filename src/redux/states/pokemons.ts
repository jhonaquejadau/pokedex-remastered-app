import { createSlice } from "@reduxjs/toolkit";
import { PokemonInterface } from "@/models";

const EmptyPokemonsState: any = [];

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: EmptyPokemonsState,
  reducers: {
    setPokemons: (state, action) => action.payload,
    resetPokemons: () => EmptyPokemonsState,
  },
});

export const { setPokemons, resetPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
