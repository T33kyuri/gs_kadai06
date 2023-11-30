import React, { useEffect, useState } from 'react';

function Pokesute() {
  const key = 'selectedPokemonId'; // ローカルストレージのキー
  const selectedNumber = localStorage.getItem(key); // ローカルストレージからポケモンのIDを取得

  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (selectedNumber) {
      fetchPokemonDetails(selectedNumber);
    }
  }, [selectedNumber]);

  const fetchPokemonDetails = async (id) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(url);
      const pokemon = await res.json();
      setPokemonDetails(pokemon);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };


    // 各バーのデータ（例：数値は仮のデータ）
    const data = [80, 120, 160, 40, 200, 100];

    // 最大値を取得
    const maxData = Math.max(...data);
  

  return (
    <div>
      <h1>Pokesute</h1>
      {pokemonDetails ? (
        <div className="grid grid-cols-3 ">
          <div className="flex items-end w-60 grid grid-cols-2 m-4">
            <p className="col-span-2 h-5 text-center ">No.{pokemonDetails.id}</p>
            <div className="col-span-2 h-5 text-center ">{pokemonDetails.name}</div>
            <div className="col-span-2 h-5 text-center place-content-center mt-6">通常時</div>
            <div className="flex justify-center"><img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} /></div>
            <div className="flex justify-center"><img src={pokemonDetails.sprites.back_default} alt={pokemonDetails.name} /></div>
            <div className="col-span-2 h-5 text-center place-content-center mt-6">色違い</div>
            <div className="flex justify-center"><img src={pokemonDetails.sprites.front_shiny} alt={pokemonDetails.name} /></div>
            <div className="flex justify-center"><img src={pokemonDetails.sprites.back_shiny} alt={pokemonDetails.name} /></div>
          </div>
          <div>
            <div  className="grid grid-cols-4 grid-rows-3 pl-4 items-center">
              <div className='h-8 col-span-2'> &nbsp; &nbsp; Type1 :  </div> <div className='col-span-2'> {pokemonDetails.types[0].type.name} </div>
              <div className='h-8 col-span-2'> &nbsp; &nbsp; Type2 :  </div> 
              {pokemonDetails.types[1] ? (
                <div>
                  <div className='col-span-2'> {pokemonDetails.types[1].type.name} </div>
                </div>
                  ) : (
                <div>
                  <div></div>
                  <div className='col-span-2'> </div> {/* タイプがない場合は空白を表示 */}
                </div>
              )} 
            </div>
            <div  className="grid grid-cols-5 grid-rows-6 h-56 pl-4 items-center">
              <div className=''> HP  </div> <div className=''> : &nbsp; {pokemonDetails.stats[0].base_stat} </div> <div className='col-span-3 h-4 bg-red-300' style={{ width: `${(pokemonDetails.stats[0].base_stat / 200) * 100}%` }}> </div>
              <div className=''> 攻撃 </div> <div className=''> : &nbsp;  {pokemonDetails.stats[1].base_stat} </div> <div className='col-span-3 h-4 bg-red-300' style={{ width: `${(pokemonDetails.stats[1].base_stat / 200) * 100}%` }}> </div>
              <div className=''> 防御 </div> <div className=''> : &nbsp; {pokemonDetails.stats[2].base_stat} </div> <div className='col-span-3 h-4 bg-red-300' style={{ width: `${(pokemonDetails.stats[2].base_stat / 200) * 100}%` }}> </div>
              <div className=''> 特攻 </div> <div className=''> : &nbsp; {pokemonDetails.stats[3].base_stat} </div> <div className='col-span-3 h-4 bg-red-300' style={{ width: `${(pokemonDetails.stats[3].base_stat / 200) * 100}%` }}> </div>
              <div className=''> 特防 </div> <div className=''> : &nbsp; {pokemonDetails.stats[4].base_stat} </div> <div className='col-span-3 h-4 bg-red-300' style={{ width: `${(pokemonDetails.stats[4].base_stat / 200) * 100}%` }}> </div>
              <div className=''> 素早さ </div> <div className=''> : &nbsp; {pokemonDetails.stats[5].base_stat} </div> <div className='col-span-3 h-4 bg-red-300' style={{ width: `${(pokemonDetails.stats[5].base_stat / 200) * 100}%` }}> </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Pokesute;
