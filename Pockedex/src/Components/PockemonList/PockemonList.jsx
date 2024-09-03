import { useState } from "react";
import axios from "axios";
function PockemonList(){
    async function downloadPockemons(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log(response.data)
    }
    useState(() => {
        downloadPockemons();
    }, [])

    return (
        <div className="pockemon-list-wrapper">
            Pockemon DownLoaded
        </div>
    )
}

export default PockemonList;