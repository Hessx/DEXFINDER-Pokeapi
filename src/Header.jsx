import React from "react";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Header({ pokemons, handleSearch }) {
  return (
    <Container style={{ backgroundColor: "#282c34" }}>
      <Autocomplete
        options={pokemons.map((pokemon) => pokemon.name)}
        onInputChange={(_, value) => handleSearch(value)} // Passa o valor corretamente para handleSearch
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Pokémon"
            variant="filled"
            fullWidth
            sx={{
              margin: "auto", // Margem superior e inferior unificada
              width: "50%",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              "& .MuiFilledInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        )}
      />
    </Container>
  );
}

export default Header;
