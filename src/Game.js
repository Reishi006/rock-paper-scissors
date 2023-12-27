import './App';
import {useState} from 'react';



function Round({pick, opPick, score, opScore, setPick, setOpPick, setScore, setOpScore}) {
    let choice = [
        'rock',
        'paper',
        'scissors'
    ];

    let random = Math.floor(Math.random() * 3);

    const calculateWinner = (p, r) => {
        if (score < 3 && opScore < 3) {
            if (p === r) {
                setPick(p);
                setOpPick(r);

                console.log(`You: ${p} vs Opponent: ${r}`);
                random = Math.floor(Math.random() * 3);
                return r;
            } else if (p === 'rock' && r === 'paper') {
                setOpScore(opScore + 1);
                setPick(p);
                setOpPick(r);

                console.log(`You: ${p} vs Opponent: ${r}`);
                return r;
            } else if (p === 'rock' && r === 'scissors') {
                setScore(score + 1);
                setPick(p);
                setOpPick(r);

                console.log(`You: ${p} vs Opponent: ${r}`);
                return r;
            } else if (p === 'paper' && r === 'rock') {
                setScore(score + 1);
                setPick(p);
                setOpPick(r);

                console.log(`You: ${p} vs Opponent: ${r}`);
                return r;
            } else if (p === 'paper' && r === 'scissors') {
                setOpScore(opScore + 1);
                setPick(p);
                setOpPick(r);

                console.log(`You: ${p} vs Opponent: ${r}`);
                return r;
            } else if (p === 'scissors' && r === 'rock') {
                setOpScore(opScore + 1);
                setPick(p);
                setOpPick(r);

                console.log(`You: ${p} vs Opponent: ${r}`);
                return r;
            } else if (p === 'scissors' && r === 'paper') {
                setScore(score + 1);
                setPick(p);
                setOpPick(r);

                console.log(`You: ${p} vs Opponent: ${r}`);
                return r;
            }
        } else return;
    };
    const choiceButton = choice.map((ch) =>{
        return <button key={ch} className="game-btn" onClick={() => {
            calculateWinner(ch, choice[random]);
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
                <div className={opPick}>{opPick.toUpperCase()}</div>
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
    const [pick, setPick] = useState('PLAY');
    const [opPick, setOpPick] = useState('PLAY');
    const [score, setScore] = useState(0);
    const [opScore, setOpScore] = useState(0);
    
    return (
        <>
            {(score < 3 && opScore < 3) ?
            <Round 
                pick={pick}
                opPick={opPick}
                setPick={setPick}
                setOpPick={setOpPick}
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
