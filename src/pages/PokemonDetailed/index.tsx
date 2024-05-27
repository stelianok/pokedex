import { IconButton, Divider } from "@mui/material";
import { ChevronRightOutlined, ArrowBackOutlined, ChevronLeftOutlined } from "@mui/icons-material";

import Weight from "../../components/icons/weight";
import Pokeball from "../../components/icons/pokeball";
import Straighten from "../../components/icons/straighten";

import Silhouette from "../../assets/Silhouette.png";
import "./styles.css";
import { PokemonTypeChip } from "../../components/PokemonTypeChip";

export function PokemonDetailed() {
  const pokeType = "grass";

  return (
    <div className="pokemonDetailedContainer" style={{ backgroundColor: '#74CB48' }}>
      <div className="pokeballContainer">
        <Pokeball size={"208"} color={"#FFFFFF"} />
      </div>
      <header className="pokemonDetailedHeader">
        <IconButton>
          <ArrowBackOutlined style={{ fontSize: 32, color: "#fff" }} />
        </IconButton>
        <h1 className="pokemonNameTitle">Bulbasaur</h1>
        <p className="pokemonNumberTitle">#001</p>
      </header>
      <div className="pokemonImgContainer">
        <IconButton>
          <ChevronLeftOutlined style={{ fontSize: 24, color: "#fff" }} />
        </IconButton>
        <img src={Silhouette} />
        <IconButton>
          <ChevronRightOutlined style={{ fontSize: 24, color: "#fff" }} />
        </IconButton>
      </div>
      <main className="pokemonInfoCard">
        <div className="pokemonTypesContainer">
          <PokemonTypeChip type="grass" />
          <PokemonTypeChip type="poison" />
        </div>
        <div className="sectionContainer">
          <p
            className="sectionTitle"
            style={{
              color: `var(--color-poketype-${pokeType})`
            }}>
            About
          </p>
          <div className="aboutSectionContainer">
            <div className="aboutSection">
              <div className="infoContainer">
                <Weight size={"16"} color={"#1D1D1D"} />
                <p className="infoText">6,9kg</p>
              </div>
              <p className="aboutSectionInfoTitle">Weight</p>
            </div>
            <Divider orientation="vertical" />
            <div className="aboutSection">
              <div className="infoContainer">
                <Straighten size={"16"} color={"#1D1D1D"} />
                <p className="infoText">0.7m</p>
              </div>
              <p className="aboutSectionInfoTitle">Height</p>
            </div>
            <Divider orientation="vertical" />
            <div className="aboutSection">
              <div className="movesContainer">
                <p className="infoText">Chlorophyll</p>
                <p className="infoText">Overgrow</p>
              </div>
              <p className="aboutSectionInfoTitle">Moves</p>
            </div>
          </div>
        </div>
        <div className="sectionContainer">
          <p className="pokemonDescription">
            There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.
          </p>
        </div>
        <div className="sectionContainer">
          <p
            className="sectionTitle"
            style={{
              color: `var(--color-poketype-${pokeType})`
            }}>
            Base Stats
          </p>
        </div>
      </main>
    </div>
  )
}

