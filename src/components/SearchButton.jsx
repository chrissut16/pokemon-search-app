const searchButton = ({ pokemonSearch }) => {
    return(
        <button
            className="bg-blue-900 text-white text-sm p-3 rounded-r-lg hover:bg-blue-950 duration-300"
            onClick={() =>  {
                pokemonSearch();
            }}
            >Search
        </button>
    )
}

export default searchButton;