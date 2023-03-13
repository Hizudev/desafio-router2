import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import pkLogo from "../assets/imgs/pkLogo.png";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, position: "absolute", width: "100vw" }}>
      <AppBar position="static" sx={{ backgroundColor: "tomato" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <img src={pkLogo} width="200" alt="Pokemon logo" />
          <Box>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pokemons">Pokemons</NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
