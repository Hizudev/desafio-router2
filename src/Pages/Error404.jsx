import { Box } from "@mui/system";
import Snorlax404 from "../assets/imgs/Snorlax404.png";

export default function Error404() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
      }}
    >
      <img src={Snorlax404} width="500" height="500" alt="Snorlax 404" />
    </Box>
  );
}
