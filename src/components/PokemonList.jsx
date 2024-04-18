import {useNavigate } from "react-router-dom";

const PokemonList = ({ infoDetails, results }) => {
    const navigate = useNavigate();
    return (
        <>
        {results.map((pokemon) =>
            <div 
                key={pokemon.name}
                className="flex flex-col justify-between items-center rounded-lg bg-white w-[300px] h-[450px] p-6 my-10 shadow">
                <img 
                    src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} 
                    alt="pokemon.jpg"
                    className="w-[150px]"
                ></img>
                <p 
                    className="self-start capitalize font-bold text-lg text-sky-900"
                    >{pokemon.name} 
                </p>
                <button
                    className="self-start flex text-sky-600 hover:scale-105 duration-300"
                    onClick={() => {
                        infoDetails(pokemon.url);
                        navigate(`/${pokemon.name}`);
                    }}
                    >
                    Details
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        )}
        </>
    )
}

export default PokemonList;   
