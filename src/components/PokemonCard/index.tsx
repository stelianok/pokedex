import './styles.css';
import Silhouette from "../../assets/Silhouette.png";
import { ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PokemonAbility, PokemonStat, PokemonType } from 'pokenode-ts';

export interface IPokemonCardProps {
  number: number;
  name: string;
  avatarURL: string | null | undefined;
  weight: number;
  height: number;
  types: PokemonType[]
  moves: PokemonAbility[]
  stats: PokemonStat[]
  speciesURL: string;
}

export function PokemonCard(
  { number, name, avatarURL, weight,
    height, types, moves, stats, speciesURL }: IPokemonCardProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const state: IPokemonCardProps = {
      number,
      name,
      avatarURL,
      weight,
      height,
      types,
      moves,
      stats,
      speciesURL,
    }

    navigate(`pokemons/${number}`, { state });

  }

  return (
    <ButtonBase onClick={handleNavigate}>
      <div className="pokemonCardContainer">
        <p className="pokemonNumber">#{number}</p>
        <img
          src={avatarURL ?? (Silhouette)}
          className="pokemonAvatar"
        />
        <p className="pokemonName">{name}</p>
      </div>
    </ButtonBase>

  )
}