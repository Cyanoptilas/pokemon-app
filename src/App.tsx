import { useEffect } from "react";
import "./App.css";
import { getAllPokemonData } from "./utils/pokemon";

function App() {
  const initialUrl: string = "https://pokeapi.co/api/v2/pokemon/ditto";

  useEffect(() => {
    const fetchPokemonData = async () => {
      const res = await getAllPokemonData(initialUrl);
      console.log("🚀 ~ fetchPokemonData ~ res:", res);
    };
    fetchPokemonData();
  }, []);

  return (
    <>
      <div>{initialUrl}</div>
    </>
  );
}

export default App;
