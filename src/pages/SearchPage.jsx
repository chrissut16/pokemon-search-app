
import SearchBar from '../components/SearchBar'
import SearchButton from '../components/SearchButton.jsx'
import PokemonList from '../components/PokemonList.jsx';
import LoadMore from '../components/LoadMore.jsx';
import PokemonSearch from '../components/PokemonSearch.jsx';

function SearchPage({ searchBar, setSearchBar, results, loadMore, pokemonSearch, pokeName }) {
    return(
    <>
        <div className='box-border justify-center flex p-5 bg-white text-sky-700 font-bold text-lg w-full h-fit inset-x-0 top-0 z-50 shadow-md fixed'>
            Pokemon Search App
        </div>
        <div className='flex justify-center'>
            <div className='mt-[150px]'>
                <div className='flex'>
                    <SearchBar value={searchBar} setSearchBar={setSearchBar} />
                    <SearchButton pokemonSearch={pokemonSearch} />
                </div>
                <div className='flex flex-wrap gap-10 my-10 w-[1000px]'>
                    {searchBar && searchBar == `${pokeName}` ? (
                        <PokemonSearch pokeName={pokeName}/>
                    ) : (
                        <PokemonList results={results} searchBar={searchBar} /> 
                    )}
                </div>
                <div className='flex justify-center mb-10'>
                    <LoadMore loadMore={loadMore}/>
                </div>
            </div>
        </div>
    </>
    )
}
 
export default SearchPage;