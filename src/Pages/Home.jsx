import { Typography } from "@mui/material";
import dittoDancing from "../assets/imgs/dittoDancing.gif";
import { Box } from "@mui/system";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ color: "white", textShadow: "1px 2px 2px black" }}
        variant="h1"
      >
        Bienvenid@!
      </Typography>
      <img src={dittoDancing} width="400" alt="Ditto Dancing" />
    </Box>
  );
}
