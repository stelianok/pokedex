import { IconButton, Divider, } from "@mui/material";
import { ChevronRightOutlined, ArrowBackOutlined, ChevronLeftOutlined } from "@mui/icons-material";

import Weight from "../../components/icons/weight";
import Pokeball from "../../components/icons/pokeball";
import Straighten from "../../components/icons/straighten";

import Silhouette from "../../assets/Silhouette.png";
import "./styles.css";
import { PokemonTypeChip } from "../../components/PokemonTypeChip";
import { PokemonStatusBar } from "../../components/PokemonStatusBar";
import { useLocation } from "react-router-dom";
import { IPokemonCardProps } from "../../components/PokemonCard";
import formatNumber from "../../utils/formatNumber";
import { useEffect, useState } from "react";
import api from "../../api";

export function PokemonDetailed() {
  const location = useLocation();
  const [description, setDescription] = useState("");
  const state = location.state as IPokemonCardProps;

  const {
    number,
    name,
    avatarURL,
    weight,
    height,
    types,
    moves,
    stats,
  } = state;

  useEffect(() => {
    const getPokemonDescription = async () => {
      try {
        const response = await api.getPokemonSpeciesById(number);

        const englishTextEntry = response.flavor_text_entries
          .filter((flavorTextEntry) => {
            return (flavorTextEntry.language.name == "en")
          })

        setDescription(englishTextEntry[0].flavor_text)
      }
      catch (error) {
        console.error("Error when retrieving species description");
      }
    }

    getPokemonDescription();
  }, [number]);



  const baseStatsSum = stats.reduce((accumulator, stat) => {
    return accumulator + stat.base_stat
  }, 0);

  const primaryPokemonType = types[0].type.name;


  return (
    <div className="pokemonDetailedContainer" style={{ backgroundColor: `var(--color-poketype-${primaryPokemonType})` }}>
      <div className="pokeballContainer">
        <Pokeball size={"208"} color={"#FFFFFF"} />
      </div>
      <header className="pokemonDetailedHeader">
        <IconButton>
          <ArrowBackOutlined style={{ fontSize: 32, color: "#fff" }} />
        </IconButton>
        <h1 className="pokemonNameTitle">{name}</h1>
        <p className="pokemonNumberTitle">#{formatNumber(number, 3)}</p>
      </header>
      <div className="pokemonImgContainer">
        <IconButton>
          <ChevronLeftOutlined style={{ fontSize: 24, color: "#fff" }} />
        </IconButton>
        <img src={(!avatarURL) ? Silhouette : avatarURL} />
        <IconButton>
          <ChevronRightOutlined style={{ fontSize: 24, color: "#fff" }} />
        </IconButton>
      </div>
      <main className="pokemonInfoCard">
        <div className="pokemonTypesContainer">
          {types.map((type) => {
            return (
              <PokemonTypeChip type={type.type.name} />
            )
          })}
        </div>
        <div className="sectionContainer">
          <p
            className="sectionTitle"
            style={{
              color: `var(--color-poketype-${primaryPokemonType})`
            }}>
            About
          </p>
          <div className="aboutSectionContainer">
            <div className="aboutSection">
              <div className="infoContainer">
                <Weight size={"16"} color={"#1D1D1D"} />
                <p className="infoText">{weight}kg</p>
              </div>
              <p className="aboutSectionInfoTitle">Weight</p>
            </div>
            <Divider orientation="vertical" />
            <div className="aboutSection">
              <div className="infoContainer">
                <Straighten size={"16"} color={"#1D1D1D"} />
                <p className="infoText">{height}m</p>
              </div>
              <p className="aboutSectionInfoTitle">Height</p>
            </div>
            <Divider orientation="vertical" />
            <div className="aboutSection">
              <div className="movesContainer">
                {moves.map((move) => {
                  return (
                    <p className="infoText">{move.ability.name}</p>
                  )
                })}
              </div>
              <p className="aboutSectionInfoTitle">Moves</p>
            </div>
          </div>
        </div>
        <div className="sectionContainer">
          <p className="pokemonDescription">
            {description}
          </p>
        </div>
        <p
          className="sectionTitle"
          style={{
            color: `var(--color-poketype-${primaryPokemonType})`
          }}>
          Base Stats
        </p>
        <div className="baseStatsContainer">
          <PokemonStatusBar
            name="HP"
            pokemonType={primaryPokemonType}
            statValue={stats[0].base_stat}
            maxStatValue={500}
          />
          <PokemonStatusBar
            name="ATK"
            pokemonType={primaryPokemonType}
            statValue={stats[1].base_stat}
            maxStatValue={500}
          />
          <PokemonStatusBar
            name="DEF"
            pokemonType={primaryPokemonType}
            statValue={stats[2].base_stat}
            maxStatValue={500}
          />
          <PokemonStatusBar
            name="SATK"
            pokemonType={primaryPokemonType}
            statValue={stats[3].base_stat}
            maxStatValue={500}
          />
          <PokemonStatusBar
            name="SDEF"
            pokemonType={primaryPokemonType}
            statValue={stats[4].base_stat}
            maxStatValue={500}
          />
          <PokemonStatusBar
            name="SPD"
            pokemonType={primaryPokemonType}
            statValue={stats[5].base_stat}
            maxStatValue={500}
          />
          <PokemonStatusBar
            name="SUM"
            pokemonType={primaryPokemonType}
            statValue={baseStatsSum}
            maxStatValue={999}
          />
        </div>
      </main>
    </div>
  )
}

