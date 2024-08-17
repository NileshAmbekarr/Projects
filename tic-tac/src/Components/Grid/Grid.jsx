import { useState } from "react";
import Card from '../Card/Card';
import './Grid.css';
function Grid({numberOfCards}){
    let [board , setBoard] = useState(Array(numberOfCards).fill(""));

    return (
        <div className="Grid">
            {board.map((el, idx) => <Card key = {idx}/>) }
        </div>
    )
}

export default Grid;