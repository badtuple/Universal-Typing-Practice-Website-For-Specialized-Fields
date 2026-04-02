import { useState, useEffect, useReducer } from 'react';

import '../../../App.css';


function WordCounter({testStarted, setTimerExpired, testRestarted, setTestRestarted}) {
    // below variable is the length of time the user wants the typing practice session to last.. hardcoded for now: 1 minute or 60,000 ms
    // we can put wordCount & wordsRemaining? state in parent component
    const wordCount = 500;
    
    const [wordsRemaining, setWordsRemaining] = useState(wordCount);
    // const [timeRemaining, setTimeRemaining] = useState(timerLength);

    useEffect( () => {
        if (testRestarted) {
            setWordsRemaining(wordCount);
            setTestRestarted(false);
        }
    }, [testRestarted])

    // useEffect( () => {
    //     const intervalId = setInterval( () => {
    //         // console.log(testStarted)
    //         // console.log(counter)
    //         if (testStarted && timeRemaining >= 0) {
    //             if (0 < timeRemaining && timeRemaining <= timerLength) {
    //                 setTimeRemaining(timeRemaining - 1);
    //                 // console.log('timer updated')
    //                 // console.log(timeRemaining)
    //             }
    //             else if (timeRemaining === 0) {
    //                 console.log('Test concluded')
    //                 console.log(timeRemaining)
    //                 setTimerExpired(true)
    //             }
    //             else {
    //                 console.log('something went wrong: in Timer')
    //             }
    //         }
    //         else {
    //             // console.log('yep its here')
    //         }

    //     }, 1000);
    //     return () => clearInterval(intervalId);
    // }, [timeRemaining, testStarted]);
    

    const displayWordCounter = function() {
        // let mins = Math.floor(timeRemaining / 60);
        // let secs = timeRemaining % 60;

        // return `${mins}:${String(secs).padStart(2,'0')}`;
    }

    const displayTimer = function() {
        let mins = Math.floor(timeRemaining / 60);
        let secs = timeRemaining % 60;

        return `${mins}:${String(secs).padStart(2,'0')}`;
    }

    return (
        <>
            {/* <div className={`timer ${ testStarted && timeRemaining <= 3 ? 'testEnding' : '' }`} tabIndex='1'>{displayTimer()}</div> */}
        </>
    )
}


export default WordCounter;