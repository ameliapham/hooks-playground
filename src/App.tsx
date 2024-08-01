/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from "react";
import { Pokemon } from "./Pokemon";
import { usePokemon } from "./getPokemonsData";


export function App() {

	const { pokemons } = usePokemon();

	const [selectedPokemonId, setSelectedPokemonId] = useState<number | undefined>(undefined);

	if (pokemons.length === 0) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			{pokemons.map(pokemon => (
				<Pokemon
					key={pokemon.id}
					pokemon={pokemon}
					selected={selectedPokemonId === pokemon.id}
					onClick={() => setSelectedPokemonId(pokemon.id)}
				/>
			))}
		</div>
	);

}
