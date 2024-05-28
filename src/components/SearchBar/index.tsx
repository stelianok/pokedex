import { SearchOutlined } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import "./styles.css";
import { useState } from "react";
import { Pokemon } from "pokenode-ts";
import api from "../../api";

interface ISearchBarProps {
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>
}

export function SearchBar({ setPokemons }: ISearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchPokemonByName = async () => {
    try {
      const pokemon = await api.getPokemonByName(searchQuery.toLowerCase());
      setPokemons([pokemon]);
    }
    catch (error) {
      console.error("error" + error);
      setPokemons([]);
    }
  }
  return (
    <div className="container">
      <TextField
        placeholder="Search"
        onChange={(e) => { setSearchQuery(e.target.value) }}
        value={searchQuery}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined style={{ fontSize: 16, color: "#DC0A2D" }} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        className="searchBar"
      />
      <IconButton
        aria-label="Search"
        sx={{
          bgcolor: "#fff",
          ":hover": {
            backgroundColor: "#EFEFEF",
          }
        }}
        onClick={handleSearchPokemonByName}
      >
        <SearchOutlined style={{ fontSize: 16, color: "#DC0A2D" }} />
      </IconButton>
    </div>
  )
}