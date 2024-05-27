import { Chip, IconButton, Divider } from "@mui/material";
import { ChevronRightOutlined, ArrowBackOutlined } from "@mui/icons-material";

import Weight from "../../components/icons/weight";
import Pokeball from "../../components/icons/pokeball";
import Straighten from "../../components/icons/straighten";

import Silhouette from "../../assets/Silhouette.png";
import "./styles.css";

export function PokemonDetailed() {
  return (
    <div className="pokemonDetailedContainer" style={{ backgroundColor: '#74CB48' }}>
      <div className="pokeballContainer">
        <Pokeball size={"208"} color={"#FFFFFF"} />
      </div>
      <header className="pokemonDetailedHeader">
        <IconButton>
          <ArrowBackOutlined />
        </IconButton>
        <h1 className="pokemonNameTitle">Bulbasaur</h1>
      </header>
      <div>
        <img src={Silhouette} />
        <IconButton>
          <ChevronRightOutlined />
        </IconButton>
      </div>
      <main className="pokemonInfoCard">
        <div className="PokemonTypesContainer">
          <Chip label="grass" />
          <Chip label="poison" />
        </div>
        <div className="PokemonInfoContent">
          <div className="AboutSectionContainer">
            <p className="sectionTitle">About</p>
            <div className="AboutSection">
              <div>
                <Weight size={"16"} color={"#1D1D1D"} />
                <p className="info">6,9kg</p>
              </div>
              <p className="aboutSectionInfoTitle">Weight</p>
            </div>
            <Divider orientation="vertical" />
            <div className="AboutSection">
              <div>
                <Straighten size={"16"} color={"#1D1D1D"} />
                <p className="info">0.7m</p>
              </div>
              <p className="aboutSectionInfoTitle">Height</p>
            </div>
            <Divider orientation="vertical" />
            <div className="AboutSection">
              <div>
                <p className="info">Chlorophyll</p>
                <p className="info">Overgrow</p>
              </div>
              <p className="aboutSectionInfoTitle">Moves</p>
            </div>
          </div>
          <div className="DescriptionContainer">
            <p className="pokemonDescription">
              There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.
            </p>
          </div>
          <div className="StatsContainer">
            <p className="sectionTitle">Base Stats</p>

          </div>
        </div>
      </main>
    </div>
  )
}

