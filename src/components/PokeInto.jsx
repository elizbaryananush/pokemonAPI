import React from 'react'

function PokeInto({data}) {
  console.log(data);
  return (

    <div className='pokeinto'>
      {
        (!data) ? "loading..." : (
          <>
          <img src={data.sprites.other.dream_world.front_default}/> 
          <h1>{data.name}</h1>
<p>{data.stats[0].stat.name} :{data.stats[0].base_stat}</p>
<p>{data.stats[1].stat.name} :{data.stats[1].base_stat}</p>
<p>{data.stats[2].stat.name} :{data.stats[2].base_stat}</p>
<p>{data.stats[3].stat.name} :{data.stats[3].base_stat}</p>
<p>{data.stats[4].stat.name} :{data.stats[4].base_stat}</p>
<p>{data.stats[5].stat.name} :{data.stats[5].base_stat}</p>
          </>
        )
      }
    </div>
  )
}

export default PokeInto
