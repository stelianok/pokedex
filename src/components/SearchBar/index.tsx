import { SearchOutlined } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

import "./styles.css";
import Tag from "../icons/tag";

export function SearchBar() {
  return (
    <div className="container">
      <TextField
        placeholder="Search"
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
      <IconButton aria-label="filter pokemons">
        <Tag size={"24"} color={"#fff"} />
      </IconButton>
    </div>
  )
}