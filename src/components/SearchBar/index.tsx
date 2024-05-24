import { SearchOutlined } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

import "./styles.css";

export function SearchBar() {
  return (
    <div className="SearchBarContainer">
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </div>
  )
}