import { sleep } from "./tools/sleep";
import { useState, useEffect } from "react";

const POKEMON_JSON_URL = "https://ameliapham.github.io/www.ameliart.fr/public/pokemons.json";

export type PokemonData = {
	id: number;
	name: string;
    image: string;
	base_stats: {
		hp: number;
		attack: number;
		defense: number;
		special_attack: number;
		special_defense: number;
		speed: number;
	};
	/*
	type: string[];
	abilities: string[];
	evolution: {
		evolves_to: string;
		level: number;
	};
	*/
};




export async function getPokemonsData(): Promise<PokemonData[]> {

	await sleep(3000);

    const response = await fetch(POKEMON_JSON_URL);

    // test if 404
    if( response.status === 404 ) {
        throw new Error("Ya pas de pokemons ici");
    }

    const pokemonsJson = await response.text();

    const pokemons = JSON.parse(pokemonsJson) as PokemonData[];

    return pokemons;

}

export function usePokemon() {

	const [pokemons, setPokemons] = useState<PokemonData[]>([]);

	const effect = () => {

		(async () => {

			const pokemons = await getPokemonsData();

			setPokemons(pokemons);


		})();

	};

	useEffect(effect, []);

	return { pokemons };

}
