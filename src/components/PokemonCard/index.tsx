import './styles.css';
import Silhouette from "../../assets/Silhouette.png";

interface IPokemonCardProps {
  number: string;
  name: string;
  pokemonAvatarURL: string | null | undefined;
}

export function PokemonCard({ number, name, pokemonAvatarURL }: IPokemonCardProps) {
  return (
    <div className="pokemonCardContainer">
      <p className="pokemonNumber">#{number}</p>
      <img
        src={pokemonAvatarURL ?? (Silhouette)}
        className="pokemonAvatar"
      />
      <p className="pokemonName">{name}</p>

    </div>
  )
}