import { useState } from "react";
import axios from "axios";
import './PockemonList.css';
function PockemonList(){
    const [PockemonList, getPockemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    async function downloadPockemons(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(response.data);
        const PockemonResults = response.data.results;
        const pockemonResultsPromise = PockemonResults.map((pockemon) => {axios.get(pockemon.url)});
        const PockemonData = await axios.all(pockemonResultsPromise);
        console.log(PockemonData);
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