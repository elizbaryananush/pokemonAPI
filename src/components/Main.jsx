import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import PokeInto from './PokeInto'

function Main() {

  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex , setPokeDex] = useState()

  const pokeFun = async () => {
    setLoading(true)

    const response = await axios.get(url);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);
    getPokemon(response.data.results);
    setLoading(false);
  }

  const getPokemon = async (response) => {
    response.map(async (item) => {
      const result = await axios.get(item.url)
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state
      })
    })
  }

  useEffect(() => {
    pokeFun();
  }, [url]) 

  return (
    <div>
      <div className="container">
        <div className="left-part">
          <Card pokemon={pokeData} loading={loading} pokeInfo={poke => setPokeDex(poke)} />

          <div className="btn-group">
            <button onClick={() => {
              setPokeData([])
              setUrl(prevUrl)
            }}>Previous</button>
            <button onClick={()=>{
              setPokeData([])
              setUrl(nextUrl)
            }}>next</button>
          </div>
        </div>
        <div className="right-part">
          <PokeInto data={pokeDex}/>
        </div>
      </div>
    </div>
  )
}

export default Main
