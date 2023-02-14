import { PokemonTypesInterface, PokemonEvolutionInterface } from "./index";

export interface PokemonInterface {
    id: number;
    name: string;
    types: PokemonTypesInterface[]
    evolutions: PokemonEvolutionInterface[]
}