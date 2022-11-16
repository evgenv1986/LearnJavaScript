//import './App.css';
import React, {useState} from 'react';
import {Clicker} from './clicker/Clicker';
import {Timer} from './timer/timer';

function App() {
  const [isClicker, setClicker] = useState(false);
  const [isTimer, setTimer] = useState(false);

  return (
    <div className="App">
        <div>
          <button onClick={ () => setClicker(!isClicker)}>
            Toggle clicker
          </button>
          {isClicker && <Clicker />}
        </div>
        <div>
          <button onClick={() => setTimer(!isTimer)}>Toggle timer</button>
          {isTimer && <Timer />}
        </div>
    </div>
  );
}

export default App;
