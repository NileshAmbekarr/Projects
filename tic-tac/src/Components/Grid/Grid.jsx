import { useState } from "react";
import Card from '../Card/Card';
import './Grid.css';
import isWinner from "../../helpers/isWinner";
function Grid({numberOfCards}){
    const [board , setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn , setTurn] = useState(true);  // true => O ; false => X
    const [winner, setWinner]  = useState(null);

    function play(index){
        if(turn){
            board[index] = 'O';
        }else {
            board[index] = 'X';
        }

        const win = isWinner(board, (turn)? "O" : "X");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }
    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                        
                    </>
                )
            }
            <div className="turn-highlight">Current Turn : {(turn)? 'O' : 'X'}</div>
            <div className="Grid">
                {board.map((el, idx) => <Card key = {idx} onPlay = {play} player = {el} index = {idx} />) }
            </div>
            <button className="reset-button" onClick={reset}>Reset Game</button>
        </div>
        
    )
}

export default Grid;