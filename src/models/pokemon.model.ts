import { PokemonTypesInterface, PokemonEvolutionInterface } from "./index";

export interface PokemonInterface {
    id: number;
    name: string;
    types: PokemonTypesInterface[]
    evolutions: PokemonEvolutionInterface[]
    abilities: [],
    weight: number,
    height: number,
    stats: [],
    img: string,
    base_experience: number,
    background: string
}