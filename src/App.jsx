import { BrowserRouter, Routes, Route, } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [results, setResults] = useState ([])
  const [searchBar, setSearchBar] = useState('');
  const [data, setData] = useState([])

  const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

  // console.log(searchBar)
  
  const pokemonList = async () => {
    const response = await axios.get (pokemonListUrl)
    getPokemon(response.data.results)
  }

  const getPokemon = (response) => {
    response.map( async (result) => {
    setResults(array =>{
      array = [...array, result]
      return array;
    })
    });
  }

  const infoDetails = async (pokemon) => {
    const pokemonURL = await axios.get(pokemon)
    setData(pokemonURL.data)
  }

  useEffect(() => {
    pokemonList();
    }, [pokemonListUrl]);

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchPage infoDetails={infoDetails} searchBar={searchBar} setSearchBar={setSearchBar} results={results} />} />
            <Route path="/:name" element={<DetailsPage poke={data}/>} />
          </Routes>
        </BrowserRouter>
    )
}

export default App;
