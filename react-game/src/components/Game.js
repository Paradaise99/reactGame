import React from 'react';
import './Game.css';
import Sheep from './Sheep';

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const boardLength = verticalAxis.length * horizontalAxis.length;


function Game() {

    let board = [];
    

    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            const randomSpot = Math.floor(Math.random() * boardLength);

            if (randomSpot) {
                board.push(
                    <div className="tile">
                        {horizontalAxis[i]} {verticalAxis[j]}
                    </div>
                    );
            } else {
                board.push(
                        <Sheep/>
                    );
            }
        }
    }

    return (
        <div id='gameBoard'>
            {board}
        </div> 
        
    )
}

export default Game
