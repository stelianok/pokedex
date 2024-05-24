import './styles.css';

import { PokemonCard } from '../../components/PokemonCard';
import { SearchBar } from '../../components/SearchBar';

import Pokeball from '../../components/icons/pokeball';

export function Home() {
  return (
    <>
      <div className="background">
        <header>
          <div className="logoContainer">
            <Pokeball size={"24"} color={"#fff"} />
            <h1>Pokedéx</h1>
          </div>
          <div>
            <SearchBar />
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