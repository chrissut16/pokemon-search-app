import { BrowserRouter, Routes, Route, } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [results, setResults] = useState ([])
  const [searchBar, setSearchBar] = useState('');


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

  useEffect(() => {
    pokemonList();
    }, []);

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchPage searchBar={searchBar} setSearchBar={setSearchBar} results={results} />} />
            <Route path="/:name" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
    )
}

export default App;
