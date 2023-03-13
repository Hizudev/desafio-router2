import { Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useProyectContext } from "../Context/ProyectContext";
import Swal from "sweetalert2";

export default function Pokemons() {
  const {
    prevPage,
    setPrevPage,
    currentPage,
    setCurrentPage,
    nextPage,
    setNextPage,
  } = useProyectContext();
  const [data, setData] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const [paginatorSwitch, setPaginatorSwitch] = useState(false);
  const [buttonSwitch, setButtonSwitch] = useState(false);
  const navigate = useNavigate();

  const toPokemon = () => {
    navigate(`/pokemons/${pokeName}`);
  };

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const apiData = await response.json();
      if (apiData.results.length === 20) {
        setData(apiData.results);
        setPrevPage(apiData.previous);
        setCurrentPage(url);
        setNextPage(apiData.next);
        setPaginatorSwitch(true);
        setButtonSwitch(false);
      } else setButtonSwitch(true);
    } catch (error) {
      Swal.fire("Error en Fetch", `${error}`, "error");
    }
  };

  useEffect(() => {
    getData(currentPage);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        align="center"
        sx={{
          paddingBottom: "3em",
          color: "white",
          textShadow: "1px 2px 2px black",
        }}
      >
        Selecciona un pokemon
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <select onChange={({ target }) => setPokeName(target.value)}>
          <option value="">selecciona un pokemon</option>
          {data.map((pokemon) => (
            <option key={pokemon.name}>{pokemon.name}</option>
          ))}
        </select>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "3em",
          }}
        >
          {prevPage === null ? (
            <IconButton aria-label="Previous Page" disabled>
              <ArrowBackIosNewIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Previous Page"
              onClick={() => getData(prevPage)}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}
          <Typography
            sx={{ color: "white", textShadow: "1px 2px 2px black" }}
            variant="p"
          >
            {paginatorSwitch
              ? "Desde " + data[0].name + " a " + data[data.length - 1].name
              : ""}
          </Typography>
          {buttonSwitch ? (
            <IconButton aria-label="Next Page" disabled>
              <ArrowForwardIosIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="Next Page"
              onClick={() => getData(nextPage)}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
        <Button variant="contained" color="warning" onClick={toPokemon}>
          ver detalle
        </Button>
      </Box>
    </Box>
  );
}
