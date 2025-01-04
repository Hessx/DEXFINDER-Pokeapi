import React, { useState } from "react";
import { Chip, Box } from "@mui/material";

const TypeFilter = ({ handleTypeFilter }) => {
  const types = [
    "electric",
    "fire",
    "water",
    "grass",
    "flying",
    "ice",
    "bug",
    "poison",
    "rock",
    "ground",
    "psychic",
    "fighting",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "all",
  ];

  const typeColors = {
    electric: "#FFD700",
    fire: "#FF4500",
    water: "#4682B4",
    grass: "#228B22",
    flying: "#87CEEB",
    ice: "#00CED1",
    bug: "#556B2F",
    poison: "#800080",
    rock: "#8B4513",
    ground: "#A0522D",
    psychic: "#FF69B4",
    fighting: "#8B0000",
    ghost: "#4B0082",
    dragon: "#6A5ACD",
    dark: "#2F4F4F",
    steel: "#708090",
    all: "#000000",
  };

  const [selectedType, setSelectedType] = useState("all");

  const handleChipClick = (type) => {
    const newType = selectedType === type ? "all" : type;
    setSelectedType(newType);
    handleTypeFilter(newType);
  };

  const chipStyles = (type) => ({
    backgroundColor: selectedType === type ? "#fff" : typeColors[type],
    color: selectedType === type ? typeColors[type] : "#fff",
    fontFamily: "'Press Start 2P', serif",
    fontSize: "8px",
    padding: "8px",
    margin: "0px",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
      opacity: 0.9,
    },
    border: selectedType === type ? "1px solid #FFD700" : "none",
    boxShadow:
      selectedType === type ? "0 0 10px 1px rgba(255, 215, 0, 0.5)" : "none",
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        marginTop: "20px",
        justifyContent: "center",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "transparent",
      }}
    >
      {types.map((type) => (
        <Chip
          key={type}
          label={type.charAt(0).toUpperCase() + type.slice(1)}
          clickable
          onClick={() => handleChipClick(type)}
          sx={chipStyles(type)}
        />
      ))}
    </Box>
  );
};

export default TypeFilter;
