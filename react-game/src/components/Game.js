import React from 'react';
import './Game.css';
import Sheep from './Sheep';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const boardLength = verticalAxis.length * horizontalAxis.length;

const randomSpot = Math.floor(Math.random() * boardLength);

function Game() {

    let board = [];

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const randomSpot = Math.floor(Math.random() * boardLength);

            if (boardLength === randomSpot){
                board.push(
                    <Sheep />
                    );
            } else {
                board.push(
                    <div className="tile tile-color">
                        {horizontalAxis[i]} {verticalAxis[j]}
                    </div>
                    );
            }
        }
    }

    return (
        <div id='gameBoard'>
            {board}
            <h1>{randomSpot}</h1>
        </div> 
        
    )
}

export default Game
