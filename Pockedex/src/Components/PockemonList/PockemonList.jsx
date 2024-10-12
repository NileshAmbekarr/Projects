import { useState } from "react";
import axios from "axios";
import './PockemonList.css';
function PockemonList(){
    const [PockemonList, setPockemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    async function downloadPockemons(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(response.data);
        const PockemonResults = response.data.results;
        const pockemonResultsPromise = PockemonResults.map((pockemon) => {axios.get(pockemon.url)});
        const PockemonData = await axios.all(pockemonResultsPromise);
        console.log(PockemonData);
        const res = PockemonData.map((pokedata) => {
            const pokemon = pokedata.data;
            return [name: pokemon.name, 
                    image: pokemon.sprites.other.dream_world.front_default ,
                    types : pokemon.types
            ]
        });
        setIsLoading(false);
    }
    useState(() => {
        downloadPockemons();
    }, [])

    return (
        <div className="pockemon-list-wrapper">
            <div>Pockemon List</div> 
            {(isLoading) ? 'Loading....': 'Pockemons Downloaded'}

        </div>
    )
}

export default PockemonList;