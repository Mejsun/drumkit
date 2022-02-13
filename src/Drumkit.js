import React, {useRef, useState} from 'react'

function Drumkit() {
    const [displayName, setDisplayName] = useState();
    const [audiosrc, setAudiosrc] = useState('')
    const audioref = useRef(null)

    const drumpads = [
    {keyCode: 81, keyTrigger: 'Q', name: 'Heater-1', url: 'http://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {keyCode: 87, keyTrigger: 'W', name: 'Heater-2', url: 'http://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
    {keyCode: 69, keyTrigger: 'E', name: 'Heater-3', url: 'http://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
    {keyCode: 65, keyTrigger: 'A', name: 'Heater-4', url: 'http://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
    {keyCode: 83, keyTrigger: 'S', name: 'Clap', url: 'http://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
    {keyCode: 68, keyTrigger: 'D', name: 'Open-HH', url: 'http://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
    {keyCode: 90, keyTrigger: 'Z', name: "Kick-n'-Hat", url: 'http://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
    {keyCode: 88, keyTrigger: 'X', name: 'Kick', url: 'http://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
    {keyCode: 67, keyTrigger: 'C', name: 'Closed-HH', url: 'http://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
    ]

    const handleClicked = (e) => {
        for(let i=0; i<drumpads.length; i++){
        let name  = drumpads[i].name;
        let source = drumpads[i].url;
        if(e.target.innerText === drumpads[i].keyTrigger){
            setDisplayName(name);
            audioref.current.play();
            setAudiosrc(source);
        }}} 
        
    return (
        <div className="App" id="drum-machine" >
            <h1> Play me! </h1>
            <div className="mainDisplay" id="display">
                <div className='board'>
                {drumpads.map((drumpad) => {return(
                    <div>
                    <button onClick={handleClicked} className='drum-pad' key={Math.random()} id={drumpad.name} > {drumpad.keyTrigger} </button>                        
                    <audio className='clip' id={drumpad.keyTrigger} src={audiosrc} ref={audioref} autoPlay> </audio>                 
                    </div>
                     )})}
                   </div>
                <div className= 'secondscreen'>{displayName}</div>
            </div>
        </div>
          );
    }

export default Drumkit