import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import PokeDetails from "../components/PokeDetails";

function DetailsPage() {
    let { name } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const selectedPokemon = `https://pokeapi.co/api/v2/pokemon/${name}/`;

    const getDetails = async () => {
        const pokemonURL = await axios.get(selectedPokemon)
        setData(pokemonURL.data)
    }
    
    useEffect(() => {
        getDetails();
    }, []);

    console.log(name)

    return(
    <>
        <div 
            className='box-border justify-center flex p-5 bg-white text-sky-600 font-bold text-lg w-full h-fit inset-x-0 top-0 z-50 shadow-md'>
            Pokemon Search App
        </div>
        <div className="my-5 p-3 ml-[250px] ">
            <button
                className="flex items-center text-sky-600 font-bold duration-300 hover:scale-105" 
                onClick={() =>
                navigate(`/`)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5s">
                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>
                Back
            </button>
        </div>
        <div 
            className="flex justify-center">
            <PokeDetails poke={data}/>
        </div>
    </>
    )
};

export default DetailsPage;