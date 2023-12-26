import './App';
import {useState} from 'react';



function Round({pick, score, opScore, setPick, setScore, setOpScore}) {
    let choice = [
        'rock',
        'paper',
        'scissors'
    ];

    let random = Math.floor(Math.random() * 3);

    const calculateWinner = () => {
        if (score < 3 && opScore < 3) {
            if (pick === choice[random]) {
                console.log(`${choice[random]}`);
                random = Math.floor(Math.random() * 3);
            } else if (pick === 'rock' && choice[random] === 'paper') {
                setOpScore(opScore + 1);
            } else if (pick === 'rock' && choice[random] === 'scissors') {
                setScore(score + 1);
            } else if (pick === 'paper' && choice[random] === 'rock') {
                setScore(score + 1);
            } else if (pick === 'paper' && choice[random] === 'scissors') {
                setOpScore(opScore + 1);
            } else if (pick === 'scissors' && choice[random] === 'rock') {
                setOpScore(opScore + 1);
            } else if (pick === 'scissors' && choice[random] === 'paper') {
                setScore(score + 1);
            }
        } else return;
    };

    const choiceButton = choice.map((ch) =>{
        return <button key={ch} className="game-btn" onClick={() => {
            setPick(ch);
            calculateWinner();
        }}>{ch.toUpperCase()}</button>
    });


    return (
        <div className='main-container'>
            <h2>Game score</h2>
            <div className="scores-grid">
                <h3>You</h3>
                <h3>vs</h3>
                <h3>Opponent</h3>
                
                <div>{score}</div>
                <div>:</div>
                <div>{opScore}</div>

                <div className={pick}>{pick.toUpperCase()}</div>
                <div></div>
                <div className={choice[random]}>{choice[random].toUpperCase()}</div>
            </div>
            {choiceButton}
        </div>
    );
}

function PlayAgain({score, opScore, setScore, setOpScore}) {
    let whoWon = '';

    if (score === 3) {
        whoWon = 'You win!';
    } else if (opScore === 3) {
        whoWon = 'Opponent won'
    }

    const resetScore = () => {
        console.log(`reset`);
        setScore(0);
        setOpScore(0);
    }


    return (
        <>
            <div className='scores-grid-after'>
                <h3>You</h3>
                <h3>vs</h3>
                <h3>Opponent</h3>
                
                <div>{score}</div>
                <div>:</div>
                <div>{opScore}</div>
            </div>

            <div className="who-won">
                {whoWon}
                <button className="start-btn" onClick={resetScore}>
                    Play again?
                </button>
            </div>
        </>
    );
}

export default function Game() {
    const [pick, setPick] = useState('rock');
    const [score, setScore] = useState(0);
    const [opScore, setOpScore] = useState(0);
    
    return (
        <>
            {(score < 3 && opScore < 3) ?
            <Round 
            pick={pick}
            setPick={setPick}
            score={score}
            setScore={setScore}
            opScore={opScore}
            setOpScore={setOpScore}
            ></Round> 
            : ''}
            

        

            {(score === 3 || opScore === 3) ?
            <PlayAgain
            score={score}
            opScore={opScore}
            setScore={setScore}
            setOpScore={setOpScore}
            ></PlayAgain>
            : ''}
        </>
    );
}
