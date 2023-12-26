import './App.css';
import { Link } from "react-router-dom";


export default function App() {
  return (
    <>
      <div className='main-container'>
        <h1>Rock, Paper, Scissors!</h1>
        <div>
          Start the game!
          <p>
            <Link to="/game">
              <button 
                className='start-btn'>
                Start!
              </button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
