import {useState} from 'react';

import Timer from './Timer.jsx';
import TypingPracticeField from './TypingPracticeField.jsx'
import UserTypingStats from './UserTypingStats.jsx'

// This component will manage the shared states of all the other timed typing test components and display them
function TimedTypingTest() {
    // looks like we may have to insert code for managing state between components here (TypingPracticeField may need to emit an event for Timer to accept so it knows when to start the count down)

    // 2 states for: whether user has started typing & whether timer has expired
    const [startTimer, setStartTimer] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    // insert states that need to be shared between sibling components here.. the states will be managed by TimedTypingTest and passed into the child components that need them
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [wordsTyped, setWordsTyped] = useState(0);
    const [charTypedCorrectly, setCharTypedCorrectly] = useState(0);
    const [totalCharTyped, setTotalCharTyped] = useState(0);
    
    return (
        <>
            <h1>THE "TimedTypingTest" COMPONENT BEGINS HERE</h1>

            {/* Timer's props are 1 input: startTimer bool to determine when to start countdown & 1 output: when countdown reaches 0 function is called outside component to set timerExpired bool to true && */}
            <Timer startTimer={startTimer} onTimerExpire={() => setTimerExpired(true)} setTimeElapsed={setTimeElapsed} />
            {/* TypingPracticeField's props are 1 output: on user's first input set startTimer to true & 1 input: timerExpired bool to prevent user input if the timer has expired && */}
            <TypingPracticeField onFirstKeyPress={() => setStartTimer(true)} preventInput={timerExpired} setWordsTyped={setWordsTyped} setCharTypedCorrectly={setCharTypedCorrectly} setTotalCharTyped={setTotalCharTyped} />
            {/* should i modularize above component into more components? */}

            <UserTypingStats timeElapsed={timeElapsed} wordsTyped={wordsTyped} charTypedCorrectly={charTypedCorrectly} totalCharTyped={totalCharTyped} />

            {/* {console.log(`timeElapsed: ${timeElapsed}    wordsTyped: ${wordsTyped}    charTypedCorrectly: ${charTypedCorrectly}    totalCharTyped: ${totalCharTyped}`)} */}

        </>
    )
}

export default TimedTypingTest;










// import { useState } from 'react'
// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)
//   const [text, setText] = useState("cranky")
//   const [input, setInput] = useState("")
//   const onType = (_) => setInput(input + _.currentTarget.value)

//   const printChar = (i) => {
//     console.log(input)
//     console.log(input.length)
//     // if (i > input.length - 1) {
//     //   return <span>{text[i]}</span>
//     // }
//     if (text[i] == input[i]) {
//       return <span className="green">{text[i]}</span>
//     }
//     else {
//       return <span className="red">{text[i]}</span>
//     }
//   }

//   return (
//     <>

//       <div className="card">

//         <p>{text.split("").map((_,i) => printChar(i))}</p>
//         <input type="text" value={""} onInput={onType}/>
//         {/* {text.split("").map(l => <p>{l}</p>)} */}

//       </div>

//     </>
//   )
// }

// export default App

