import React, {useRef, useState, useEffect} from 'react'

function Drumkit() {
    const [displayName, setDisplayName] = useState();
    const [audiosrc, setAudiosrc] = useState('')
    const audioref = useRef(null)

    const drumpads = [
    {keyCode: 81, keyTrigger: 'Q', name: 'Tom', url: 'http://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tom.wav'},
    {keyCode: 87, keyTrigger: 'W', name: 'Snare', url: 'http://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/snare.wav'},
    {keyCode: 69, keyTrigger: 'E', name: 'Ride', url: 'http://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/ride.wav'},
    {keyCode: 65, keyTrigger: 'A', name: 'Boom', url: 'http://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav'},
    {keyCode: 83, keyTrigger: 'S', name: 'Clap', url: 'http://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/clap.wav'},
    {keyCode: 68, keyTrigger: 'D', name: 'Open-HH', url: 'http://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/openhat.wav'},
    {keyCode: 90, keyTrigger: 'Z', name: 'Tink', url: 'http://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tink.wav'},
    {keyCode: 88, keyTrigger: 'X', name: 'Kick', url: 'http://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/kick.wav'},
    {keyCode: 67, keyTrigger: 'C', name: 'Closed-HH', url: 'http://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/hihat.wav'}
    ]

    const handleClicked = (e) => {
        for(let i=0; i<drumpads.length; i++){
        let name  = drumpads[i].name;
        let source = drumpads[i].url;
        if(e.target.innerText === drumpads[i].keyTrigger){
            setDisplayName(name);
            setAudiosrc(source);
            audioref.current.play();
            audioref.current.time = 0;
            console.log(source)
        }}} 

    
    const handleKeyPress = (e) => {
        for(let i=0; i<drumpads.length; i++){
        let name  = drumpads[i].name;
        let source = drumpads[i].url;
        let keyid = drumpads[i].keyCode
        if(e.keyCode === keyid){
        setDisplayName(name);
        setAudiosrc(source);
        audioref.current.play();
        audioref.current.time = 0;
        console.log(source)
        }}
   }
    useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {window.removeEventListener('keydown', handleKeyPress)};
    });
        
    return (
        <div className="App" id="drum-machine" >
            <h1> Play me! </h1>
            <div className="mainDisplay" id="display">
                <div className='board'>
                {drumpads.map((drumpad) => {return(
                    <button onClick={handleClicked} className='drum-pad' key={Math.random()} id={drumpad.name} > {drumpad.keyTrigger}                      
                    <audio className='clip' id={drumpad.keyTrigger} src={audiosrc} ref={audioref} autoPlay> </audio>                 
                    </button>
                     )})}
                   </div>
                <div className= 'secondscreen'>{displayName}</div>
            </div>
        </div>
    );
}

export default Drumkit