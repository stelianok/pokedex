import Ditto from "../../assets/Ditto.png";

import './styles.css';

export function PokemonCard() {
  return (
    <div className="pokemonCardContainer">
      <p className="pokemonNumber">#132</p>
      <img
        src={Ditto}
        className="pokemonAvatar"
      />
      <p className="pokemonName">Ditto</p>
      {/* <div className="grayDiv"></div> */}
    </div>
  )
}