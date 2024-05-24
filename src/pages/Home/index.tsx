import './styles.css';

import { IconButton } from '@mui/material';

import { PokemonCard } from '../../components/PokemonCard';
import { SearchBar } from '../../components/SearchBar';

import Pokeball from '../../components/icons/pokeball';
import Tag from '../../components/icons/tag';

export function Home() {
  return (
    <>
      <div className="background">
        <header>
          <div className="LogoContainer">
            <Pokeball size={"24"} color={"#fff"} />
            <h1>Pokedéx</h1>
          </div>
          <div>
            <SearchBar />
            <IconButton aria-label="filter pokemons">
              <Tag size={"48"} color={"#fff"} />
            </IconButton>
          </div>
        </header >
        <main>
          {/* This is a  grid */}
          <div className="pokemonGrid">
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
          </div>
        </main>
      </div >
    </>
  )
}