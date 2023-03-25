import React from 'react'
import image from '../assets/Charmander.webp'

function Card({ pokemon, loading, pokeInfo }) {
  return (
    <>
      {
        loading ? <h1>Loading ...</h1> :
          pokemon.map(item => {
            return (
              <div className='card' key={item.id} onClick={() => {
                pokeInfo(item)
              }}>
                <h2>{item.id}</h2>
                <img src={item.sprites.back_default} />
                <h2>{item.name}</h2>
              </div>
            )
          })
      }
    </>
  )
}

export default Card
