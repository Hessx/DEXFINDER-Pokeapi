import React, { useState } from "react";
import Chip from "@mui/material/Chip";

const PokemonChip = ({ types, getTypeColor, onTypeSelect }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);
  const handleClick = (typeName, index) => {
    onTypeSelect(typeName);
    setClickedIndex(index);
  };

  return (
    <div>
      {types.map((typeInfo, index) => {
        const typeName = typeInfo.type.name;
        const isHovered = hoveredIndex === index;
        const isClicked = clickedIndex === index;
        const color = getTypeColor(typeName) || "#ccc"; // Fallback para cor padrão

        return (
          <Chip
            key={index}
            label={typeName}
            variant="outlined"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(typeName, index)}
            style={{
              backgroundColor: color,
              color: "#fff",
              margin: "4px",
              fontFamily: "'Press Start 2P', serif",
              fontSize: "8px",
              border: "none",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              transform: isHovered || isClicked ? "scale(1.1)" : "scale(1)",
            }}
          />
        );
      })}
    </div>
  );
};

export default PokemonChip;
