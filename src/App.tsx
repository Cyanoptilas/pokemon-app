import { useEffect, useState } from "react";
import "./App.css";
import {
  AllPokemonData,
  AllPokemonResult,
  getAllPokemonData,
  getPokemon,
  PokemonData,
} from "./utils/pokemon";

function App() {
  const initialUrl: string = "https://pokeapi.co/api/v2/pokemon";

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const res: AllPokemonData = await getAllPokemonData(initialUrl);
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: AllPokemonResult[]) => {
    let _pokemonData: PokemonData[] = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="pokemonCardContainer">
          {pokemonData?.map((pokemonData, i) => {
            return <Card key={i} pokemon={pokemonData} />;
          })}
        </div>
      )}
    </>
  );
}

export default App;
