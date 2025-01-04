import React, { useEffect, useState } from "react";
import { Container, Grid, Card, CardMedia } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "./App.css";
import PokemonChip from "./PokemonChip";
import Pokemodal from "./Pokemodal";
import Header from "./Header";
import TypeFilter from "./Typefilter";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStat, setSelectedStat] = useState(null);
  const [selectedStatValue, setSelectedStatValue] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

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

  const getTypeColor = (type) => typeColors[type] || "#A8A77A";

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
      .then((response) => response.json())
      .then((data) => {
        const fetches = data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );
        Promise.all(fetches).then((results) => {
          setPokemons(results);
          setFilteredPokemons(results);
        });
      });
  }, []);

  const handleSearch = (event, value) => {
    const searchTerm = value?.toLowerCase() || "";
    setFilteredPokemons(
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm)
      )
    );
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    setFilteredPokemons(
      type === "all"
        ? pokemons
        : pokemons.filter((pokemon) =>
            pokemon.types.some((t) => t.type.name === type)
          )
    );
  };

  const handleStatSelect = (statName, statValue) => {
    setSelectedStat(statName);
    setSelectedStatValue(statValue);
    setFilteredPokemons(
      pokemons.filter((pokemon) =>
        pokemon.stats.some(
          (stat) => stat.stat.name === statName && stat.base_stat === statValue
        )
      )
    );
  };

  const playCry = (cryUrl) => {
    const audio = new Audio(cryUrl);
    audio.volume = 0.1;
    audio.play();
  };

  const toggleImage = (pokemon) => {
    setCurrentImage((currentImage) =>
      currentImage === pokemon.sprites.front_default
        ? pokemon.sprites.back_default
        : pokemon.sprites.front_default
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex Finder</h1>
        <Header pokemons={pokemons} handleSearch={handleSearch} />
        <Container>
          <TypeFilter
            handleTypeFilter={handleTypeFilter}
            selectedType={selectedType}
          />
          <Grid container spacing={3}>
            {filteredPokemons.map((pokemon) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={pokemon.id}>
                <Card className="pokemon-item" style={{ opacity: ".9" }}>
                  <CardMedia
                    component="img"
                    alt={pokemon.name}
                    className="card-media"
                    onClick={() => playCry(pokemon.cries.latest)}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                    height="140"
                    image={pokemon.sprites.front_default}
                  />
                  <PokemonChip
                    types={pokemon.types}
                    getTypeColor={getTypeColor}
                    onTypeSelect={handleTypeFilter}
                  />
                  <Typography
                    style={{
                      fontFamily: '"Press Start 2P", serif',
                      fontSize: 15,
                    }}
                    variant="h6"
                  >
                    {pokemon.name}
                  </Typography>

                  <Stack
                    spacing={2}
                    direction="row"
                    sx={{ justifyContent: "center", padding: "20px" }}
                  >
                    <Pokemodal
                      content={
                        <div style={{ textAlign: "center" }}>
                          <img
                            src={currentImage || pokemon.sprites.front_default}
                            alt={pokemon.name}
                            onClick={() => toggleImage(pokemon)}
                            style={{
                              width: "50%",
                              height: "50%",
                              cursor: "pointer",
                            }}
                          />
                          <Typography className="pokemon-name" variant="h6">
                            {pokemon.name}
                          </Typography>
                          <PokemonChip
                            types={pokemon.types}
                            getTypeColor={getTypeColor}
                            onTypeSelect={handleTypeFilter}
                          />
                          <Typography className="pokemon-info">
                            id: {pokemon.id}
                          </Typography>
                          <Typography className="pokemon-info">
                            Base XP: {pokemon.base_experience}
                          </Typography>
                          <Typography className="pokemon-info">
                            height: {pokemon.height}
                          </Typography>
                          <Typography className="pokemon-info">
                            weight: {pokemon.weight}
                          </Typography>
                          {pokemon.stats.map((stat, index) => (
                            <Typography className="pokemon-info" key={index}>
                              {stat.stat.name}: <span>{stat.base_stat}</span>
                            </Typography>
                          ))}
                        </div>
                      }
                    />
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
