//import './App.css';
import React, {useState} from 'react';
import {Clicker} from './clicker/Clicker';

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
    </div>
  );
}

export default App;
