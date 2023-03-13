import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Pokemons from "./Pages/Pokemons";
import Pokemon from "./Pages/Pokemon";
import Error404 from "./Pages/error404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons/" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Pokemon />} />
        <Route path="/*" element={<Error404/>} />
      </Routes>
    </>
  );
}

export default App;
