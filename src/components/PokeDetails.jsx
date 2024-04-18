import React from "react";

const PokeDetails = ({ poke }) => {
    return( 
        <>
        <div 
            className="flex flex-col bg-white p-4 capitalize gap-3 h-fit w-[350px] rounded-lg shadow">
            <img 
                src={`https://img.pokemondb.net/artwork/large/${poke?.name}.jpg`} 
                alt="pokemon.jpg"
                className="w-[200px] self-center mb-4">
            </img>
            <div className="flex space-x-1">
                <div className="font-bold">
                    Name:
                </div>
                <div>
                    {poke?.name}
                </div>
            </div>
            <div className="flex space-x-1">
                <div className="font-bold">
                    Types:
                </div>
                {poke?.types?.map((data) =>
                    <div key={data.type.name}>
                        {data.type.name},
                    </div>
                )}
            </div>
            <div className="flex gap-1">
                <div className="font-bold">
                    Abilities:
                </div>
                {poke?.abilities?.map((data) =>
                    <div key={data.ability.name}>
                        {data.ability.name},
                    </div>
                )}
            </div>
                <div className="flex flex-wrap gap-1 mb-5 leading-4">
                    <div className="font-bold">
                        Some Moves:
                    </div>
                    {poke?.moves?.slice(0, 3).map((data) => 
                        <div key={data.move.name}>
                            {data.move.name},
                        </div> 
                    )}
                </div>
        </div>
        </>
    )
}

export default PokeDetails;