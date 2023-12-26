import './App';
import {useState} from 'react';


function Score({itemsArray, playerScore, opponentScore, handleScore}) {
    let draw = Math.floor(Math.random() * 3);

    const opponentArray = itemsArray;
    const playerArray = itemsArray;

    return (
        <>
            <h3>
                <ul className="score">
                    <li>You</li>
                    <li>vs</li>
                    <li>Opponent</li>
                </ul>
            </h3>
            <ul className="score">
                <li>{playerScore}</li>
                <li> : </li>
                <li>{opponentScore}</li>
            </ul>
            <ul className="score">
                <li><Option itemName={playerArray[0]}></Option></li>
                <li>|</li>
                <li><Option itemName={opponentArray[draw]}></Option></li>
            </ul>
        </>
    );
}

function Option({itemName}) {

    itemName = 'play';

    return (
        <div className={itemName}>{itemName}</div>
    );
}

function GameButton({itemsArray}) {

    const handleScore = (it) => {
        console.log(it);
    }

    const returnButtons = itemsArray?.map((item) => {
        return (
            <button className='game-btn' key={item} onClick={() => handleScore(item)}>{item}</button>
        )
    });

    return (
        <>
            {returnButtons}
        </>
    );
}

export default function Game() {
    const [playerScore, setPlayer] = useState(0);
    const [opponentScore, setOpponent] = useState(0);

    const itemsArray = [
        'rock',
        'paper',
        'scissors'
    ];
    
    return (
        <div className='main-container'>
            <h3>The Game Begins!</h3>
            <Score itemsArray={itemsArray}></Score>
            <GameButton itemsArray={itemsArray}></GameButton>
        </div>
    );
}