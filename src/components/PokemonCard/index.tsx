import './styles.css';
import Silhouette from "../../assets/Silhouette.png";
import { ButtonBase } from '@mui/material';

interface IPokemonCardProps {
  number: string;
  name: string;
  pokemonAvatarURL: string | null | undefined;
}

export function PokemonCard({ number, name, pokemonAvatarURL }: IPokemonCardProps) {
  return (
    <ButtonBase onClick={() => { console.warn(name) }}>
      <div className="pokemonCardContainer">
        <p className="pokemonNumber">#{number}</p>
        <img
          src={pokemonAvatarURL ?? (Silhouette)}
          className="pokemonAvatar"
        />
        <p className="pokemonName">{name}</p>
      </div>
    </ButtonBase>

  )
}