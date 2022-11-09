//import './App.css';
import React, {useState} from 'react';
import {Clicker} from './clicker/Clicker';
import {Timer} from './timer/timer';

function App() {
  const [isClicker, setClicker] = useState(false);

  return (
    <div className="App">
        <div>
          <button onClick={ () => setClicker(!isClicker)}>
            Toggle clicker
          </button>
          {isClicker && <Clicker />}
        </div>
        <div>
          <Timer />
        </div>
    </div>
  );
}

export default App;
