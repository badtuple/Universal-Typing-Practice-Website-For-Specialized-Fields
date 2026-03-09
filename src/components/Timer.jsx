import { useState, useEffect, useReducer } from 'react';

import '../App.css'


function Timer({startTimer, onTimerExpire}) {
    // below variable is the length of time the user wants the typing practice session to last.. hardcoded for now: 1 minute or 60,000 ms
    const timerLength = 6;
    
    const [counter, setCounter] = useState(6);
    // try using useReducer.. or maybe not?
    // const [counter, incrementCounter] = useReducer((i) => i + 1, 0);
    // const [remainingTime, setRemainingTime] = useState(timerLength);
    // const [currentTime, setCurrentTime]

    useEffect( () => {
        const intervalId = setInterval( () => {
            // parameter 1.. a function
            // pretty sure all of this code is completely unnecessary except the setCounter line
            // if (0 < remainingTime && remainingTime <= timerLength) {
            // console.log(startTimer)
            // console.log(counter)
            if (startTimer && counter >= 0) {
                if (0 < counter && counter <= timerLength) {
                    setCounter(counter - 1);
                    // incrementCounter();
                    // setRemainingTime(remainingTime - 1000)
                    // console.log('timer updated')
                    // console.log(counter)
                }
                // else if (remainingTime == 0) {
                else if (counter === 0) {
                    console.log('Test concluded')
                    onTimerExpire()
                }
                else {
                    console.log('something went wrong: in Timer')
                }
            }

        }, 1000);
        return () => clearInterval(intervalId);
    }, [counter, startTimer]);
    

    // let startTimer = function() {
    //     // not useable until state management code of Timer & TypingPracticeField is written in App
    // }
    
    let getTimeRemaining = function() {
        // not useable until state management code of Timer & TypingPracticeField is written in App
    }

    let pauseTimer = function() {
        // not useable until state management code of Timer & TypingPracticeField is written in App
    }

    let resetTimer = function() {
        // not useable until state management code of Timer & TypingPracticeField is written in App
    }

    const displayTimer = function() {
        let mins = Math.floor(counter / 60);
        let secs = counter % 60;

        return `${mins}:${String(secs).padStart(2,'0')}`;
    }

    return (
    <>
      {/* <p className='typingPracField'  tabIndex='1' onKeyDown={onType} ref={autoFocusElement}>{displayTextArray}</p> */}
      {/* {console.log('timer component mounted')} */}
      <div className='timer' tabIndex='1'>{displayTimer()}</div>
    </>
  )
}


export default Timer;