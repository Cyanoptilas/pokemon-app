export type AllPokemonData = {
  results: AllPokemonResult[];
};

export type AllPokemonResult = {
  name: string;
  url: string;
};

export type PokemonData = {
  abilities: [];
  base_experience: number;
};

export function getAllPokemonData(url: string): Promise<AllPokemonData> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data: AllPokemonData) => {
        return resolve(data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

export function getPokemon(url: string): Promise<PokemonData> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data: PokemonData) => {
        return resolve(data);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
