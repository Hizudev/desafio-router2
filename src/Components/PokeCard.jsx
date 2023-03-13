import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Snorlax404 from "../assets/imgs/Snorlax404.png";
import { Box } from "@mui/system";

export default function PokeCard({ pokeInfo, pokeSwitch }) {
  console.log(pokeInfo);
  return (
    <>
      {pokeSwitch && (
        <Card sx={{ display: { md: "flex" } }}>
          {pokeInfo.sprites.other.home.front_default !== null ? (
            <img
              src={pokeInfo.sprites.other.home.front_default}
              alt={pokeInfo.name}
            />
          ) : (
            <img src={Snorlax404} width="512" alt="Not Found" />
          )}
          <CardContent>
            <Typography gutterBottom align="center" variant="h4">
              {pokeInfo.name}
            </Typography>
            <ul>
              {pokeInfo.stats.map((item) => (
                <li key={item.stat.name}>
                  <Typography variant="h5">{`${item.stat.name}:`}</Typography>
                  <Typography variant="p">{`${item.base_stat}`}</Typography>
                </li>
              ))}
            </ul>
            <Typography align="center" variant="h6">
              Type:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              {pokeInfo.types.map((item) => (
                <Typography variant="body1">{item.type.name}</Typography>
              ))}
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  );
}
