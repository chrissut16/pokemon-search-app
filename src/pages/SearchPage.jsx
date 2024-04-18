import SearchBar from '../components/SearchBar'
import SearchButton from '../components/SearchButton.jsx'
import PokemonList from '../components/PokemonList.jsx';

function SearchPage({ searchBar, setSearchBar, results }) {
    return(
    <>
        <div className='box-border justify-center flex p-5 bg-white text-sky-700 font-bold text-lg w-full h-fit inset-x-0 top-0 z-50 shadow-md fixed'>
            Pokemon Search App
        </div>
        <div className='flex justify-center'>
            <div className='mt-[150px]'>
                <div className='flex'>
                    <SearchBar value={searchBar} setSearchBar={setSearchBar} />
                    <SearchButton />
                </div>
                <div className='flex flex-wrap justify-between items-center w-[1000px]'>
                    <PokemonList results={results} />
                </div>
            </div>
        </div>
    </>
    )
}
 
export default SearchPage;