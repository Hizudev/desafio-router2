import { createContext, useContext, useState } from "react";

export const ProyectContext = createContext();

export const Provider = ({ children }) => {
  const [prevPage, setPrevPage] = useState("");
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState("");

  return (
    <ProyectContext.Provider
      value={{
        prevPage,
        setPrevPage,
        currentPage,
        setCurrentPage,
        nextPage,
        setNextPage,
      }}
    >
      {children}
    </ProyectContext.Provider>
  );
};

export const useProyectContext = () => useContext(ProyectContext);
