import { BrowserRouter, Routes, Route, } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [results, setResults] = useState ([])
  const [searchBar, setSearchBar] = useState('');
  const [offset, setOffset] = useState(0)
  const [searchResult, setSearchResult] = useState([])
  const [error, setError] = useState(false)

  const pokemonListUrl = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
  const pokemonSearchUrl = `https://pokeapi.co/api/v2/pokemon/${searchBar}`

  const pokemonSearch = async () => {
    try {
      const response = await axios.get(pokemonSearchUrl)
      setSearchResult(response.data.name)
      setError(false)
    } catch (error) {
      setSearchResult(searchBar)
      setError(true)
    }
  }

  const pokemonList = async () => {
    const response = await axios.get (pokemonListUrl)
    getPokemon(response.data.results)
  }

  const getPokemon = (response) => {
    response.map((result) => {
    setResults(array =>{
      array = [...array, result]
      return array;
    })
    });
  }

  const loadMore = () => {
    setOffset(offset + 10 )
  }

  useEffect(() => {
    pokemonList();
    }, [pokemonListUrl]);

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchPage searchBar={searchBar} setSearchBar={setSearchBar} results={results} loadMore={loadMore} pokemonSearch={pokemonSearch} pokeName={searchResult} error={error} />} />
            <Route path="/:name" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
    )
}

export default App;