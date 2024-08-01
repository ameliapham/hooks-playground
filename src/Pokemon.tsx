
import type { PokemonData } from "use-pokemon";
import { tss } from "tss-react";

type Props = {
    className?: string;
    selected: boolean;
    pokemon: PokemonData;
    onClick: () => void;
};

export function Pokemon(props: Props) {

    const { className, pokemon, selected, onClick } = props;

    const { cx, classes } = useStyles({ selected });

    return (
        <div
            className={cx(className, classes.root)}
            onClick={onClick}
        >
            <h2>{pokemon.name}</h2>
            <div className={classes.imgAndStats}>
                <img src={pokemon.image} />
                {selected && (
                    <div>
                        <h3>Stats</h3>
                        <ul>
                            <li>HP: {pokemon.base_stats.hp}</li>
                            <li>Attack: {pokemon.base_stats.attack}</li>
                            <li>Defense: {pokemon.base_stats.defense}</li>
                            <li>Special Attack: {pokemon.base_stats.special_attack}</li>
                            <li>Special Defense: {pokemon.base_stats.special_defense}</li>
                            <li>Speed: {pokemon.base_stats.speed}</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );

}

const useStyles = tss
    .withParams<{ selected: boolean; }>()
    .create(({ selected }) => ({
        root: {
            border: !selected ? undefined : "3px solid red",
        },
        imgAndStats: {
            display: "flex",
        }
    }));