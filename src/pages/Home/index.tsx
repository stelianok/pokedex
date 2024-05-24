import './styles.css';

import { IconButton, TextField } from '@mui/material';
import { PokemonCard } from '../../components/PokemonCard';

import Pokeball from '../../components/icons/pokeball';
import Search from '../../components/icons/search';
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
            <div className="SearchBarContainer">
              <Search size={"16"} color={"#fff"} />
              <TextField variant="outlined" />
            </div>
            <IconButton aria-label="filter pokemons">
              <Tag size={"16"} color={"#fff"} />
            </IconButton>
          </div>
        </header>
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
      </div>
    </>
  )
}