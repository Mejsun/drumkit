import React, { useEffect} from 'react'

function Drumkit() {
    
  const drumpads = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      name: "Tom",
      url:
        "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tom.wav"
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      name: "Snare",
      url:
        "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/snare.wav"
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      name: "Ride",
      url:
        "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/ride.wav"
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      name: "Boom",
      url:
        "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav"
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      name: "Clap",
      url:
        "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/clap.wav"
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      name: "Open-HH",
      url:
        "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/openhat.wav"
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      name: "Tink",
      url:
        "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tink.wav"
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      name: "Kick",
      url:
        "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/kick.wav"
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      name: "Closed-HH",
      url:
        "https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/hihat.wav"
    }
  ];
  function handleClicked(e) {
    drumpads.forEach((drumpad) => {
      let keyTrigger = drumpad.keyTrigger;
      let name = drumpad.name;
      let audioEl = document.getElementById(keyTrigger);
      let displayName = document.querySelector("#display");
      if (e.target.innerText === keyTrigger) {
        audioEl.play();
        displayName.innerText = name;
      }
    });
  }

  function handleKeyPress(e) {
    drumpads.forEach((drumpad) => {
      let keyCode = drumpad.keyCode;
      let keyTrigger = drumpad.keyTrigger;
      let name = drumpad.name;
      let audioEl = document.getElementById(keyTrigger);
      let displayName = document.querySelector("#display");
      if (e.keyCode === keyCode) {
        audioEl.play();
        displayName.innerText = name;
      }
    });
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="App" id="drum-machine">
      <h1> Play me! </h1>
      <div className="mainDisplay">
        <div className="board">
          {drumpads.map((drumpad) => {
            return (
              <button
                className="drum-pad drum-btn"
                id={drumpad.name}
                key={Math.random()}
                onClick={(e) => {
                  handleClicked(e);
                }}
              >
                {drumpad.keyTrigger}
                <audio
                  className="clip"
                  id={drumpad.keyTrigger}
                  src={drumpad.url}
                  type="audio/mp3"
                />
              </button>
            );
          })}
        </div>
        <div className="secondscreen" id="display"></div>
      </div>
    </div>
  );
}

export default Drumkit