import { PokemonTypesInterface } from "./pokemon-types.model";

export interface PokemonEvolutionInterface {
    id: number;
    name: string;
    types: PokemonTypesInterface[];
}