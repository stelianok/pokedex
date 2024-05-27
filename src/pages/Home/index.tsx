import './styles.css';

import { PokemonCard } from '../../components/PokemonCard';
import { SearchBar } from '../../components/SearchBar';

import Pokeball from '../../components/icons/pokeball';
import { useEffect, useState } from 'react';
import api from '../../api';

import { Pokemon } from "pokenode-ts";
import { CircularProgress } from '@mui/material';

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllPokemons = async () => {
      try {
        const response = await api.listPokemons(0, 20);
        const allPokemon = response.results;

        const getAllPokemonDetails = await Promise.all(
          allPokemon.map(async (pokemon) => {
            const pokemonDetails = await api.getPokemonByName(pokemon.name);
            return pokemonDetails;
          })
        );

        setPokemons(getAllPokemonDetails);
        console.log(getAllPokemonDetails);
      }
      catch (error) {
        console.error('Error when retrieving pokemon data: ', error);
      } finally {
        setLoading(false);
      }
    }
    getAllPokemons();
  }, [])


  return (
    <>
      <div className="background">
        <header className="homeHeader">
          <div className="logoContainer">
            <Pokeball size={"32"} color={"#fff"} />
            <h1>Pokedéx</h1>
          </div>
          <div>
            <SearchBar />
          </div>
        </header >
        <main className="pokemonGridContainer">
          {/* This is a  grid */}
          <div className="pokemonGrid">
            {
              !loading ? (pokemons.map((pokemon) => (
                <PokemonCard
                  name={pokemon.name}
                  number={pokemon.id.toString()}
                  pokemonAvatarURL={pokemon.sprites.other?.['official-artwork'].front_default}
                />
              ))) : (
                <CircularProgress />
              )
            }

          </div>
        </main>
      </div >
    </>
  )
}