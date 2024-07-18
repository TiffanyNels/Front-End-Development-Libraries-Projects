import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [displayText, setDisplayText] = useState('');

  const playSound = (id, description) => {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
    setDisplayText(description);
  };

  const handleKeyPress = useCallback((event) => {
    const key = event.key.toUpperCase();
    const keyToDescription = {
      Q: "Heater 1",
      W: "Heater 2",
      E: "Heater 3",
      A: "Heater 4",
      S: "Clap",
      D: "Open HH",
      Z: "Kick n' Hat",
      X: "Kick",
      C: "Closed HH",
    };
    if (keyToDescription[key]) {
      playSound(key, keyToDescription[key]);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="App">
      <div id="drum-machine">
        <h1 id="header">Drum Machine</h1>
        <div id="display">{displayText}</div>
         <div className="drum-pad-container">
        <button className="drum-pad" id="heater1" onClick={() => playSound('Q', 'Heater 1')}>Q
          <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
        </button>
        <button className="drum-pad" id="heater2" onClick={() => playSound('W', 'Heater 2')}>W
          <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
        </button>
        <button className="drum-pad" id="heater3" onClick={() => playSound('E', 'Heater 3')}>E
          <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
        </button>
        <button className="drum-pad" id="heater4" onClick={() => playSound('A', 'Heater 4')}>A
          <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
        </button>
        <button className="drum-pad" id="clap" onClick={() => playSound('S', 'Clap')}>S
          <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
        </button>
        <button className="drum-pad" id="open-hh" onClick={() => playSound('D', 'Open HH')}>D
          <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
        </button>
        <button className="drum-pad" id="kick-n-hat" onClick={() => playSound('Z', 'Kick n\' Hat')}>Z
          <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
        </button>
        <button className="drum-pad" id="kick" onClick={() => playSound('X', 'Kick')}>X
          <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
        </button>
        <button className="drum-pad" id="closed-hh" onClick={() => playSound('C', 'Closed HH')}>C
          <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
