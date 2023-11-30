import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Poke() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);

  useEffect(() => {
    const pokemonNum = 809;
    fetchPokemons(pokemonNum);
  }, []);

  const handleLinkClick = (number) => {
    setSelectedNumber(number);
    // クリックしたpokemon.idをローカルストレージに保存
    localStorage.setItem('selectedPokemonId', number.toString());  
  };

  useEffect(() => {
    if (selectedNumber !== null) {
      // クリックしたpokemon.idを保存し、/pokesuteに移動する処理
      console.log(`Selected Number: ${selectedNumber}`);
      // ここで必要な処理を追加してください（例: ページ遷移など）
    }
  }, [selectedNumber]);

  const fetchPokemons = async (num) => {
    const promises = Array.from({ length: num }, (_, i) => getPokemon(i + 1));
    const pokemons = await Promise.all(promises);
    setPokemonList(pokemons);
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    return pokemon;
  };

  return (
    <div>
      <h1>ポケモンAPI</h1>
      <div className="flex justify-center flex-wrap m-4">
        {pokemonList.map((pokemon) => (
          <Link to={`/pokesute`} key={pokemon.id} className="border w-36 h-40 m-2 hover:bg-yellow-500" onClick={() => handleLinkClick(pokemon.id)}>
            <p className="text-center">No.{pokemon.id}</p>
            <p className="text-center">{pokemon.name}</p>
            <div className="flex justify-center"><img src={pokemon.sprites.front_default} alt={pokemon.name} /></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Poke;
