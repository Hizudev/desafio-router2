import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PokeCard from "../Components/PokeCard";

export default function Pokemon() {
  const navigate = useNavigate();
  const [pokeInfo, setPokeInfo] = useState([]);
  const [pokeSwitch, setPokeSwitch] = useState(false);
  const { name } = useParams();

  const getData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const apiData = await response.json();
      setPokeInfo(apiData);
      setPokeSwitch(true);
    } catch (error) {
      Swal.fire("Error en Fetch", `${error}`, "error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
        height: { xs: 1300, md: "100vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PokeCard pokeInfo={pokeInfo} pokeSwitch={pokeSwitch} />
      <Button
        sx={{ margin: "1rem" }}
        color="warning"
        variant="contained"
        onClick={() => navigate("/pokemons")}
      >
        Volver
      </Button>
    </Box>
  );
}
