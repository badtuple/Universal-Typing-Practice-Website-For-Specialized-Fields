import {useState} from 'react';

import Timer from './components/Timer.jsx';
import TypingPracticeField from './components/TypingPracticeField.jsx'
import UserTypingStats from './components/UserTypingStats.jsx'

// Main App function to be exported to main.jsx & index.html
function App() {
  // looks like we may have to insert code for managing state between components here (TypingPracticeField may need to emit an event for Timer to accept so it knows when to start the count down)
  
  // 2 states for: whether user has started typing & whether timer has expired
  const [startTimer, setStartTimer] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  return (
    <>
      <h1>THE "APP" COMPONENT BEGINS HERE</h1>

      {/* Timer's props are 1 input: startTimer bool to determine when to start countdown & 1 output: when countdown reaches 0 function is called outside component to set timerExpired bool to true */}
      <Timer startTimer={startTimer} onTimerExpire={() => setTimerExpired(true)} />
      {/* TypingPracticeField's props are 1 output: on user's first input set startTimer to true & 1 input: timerExpired bool to prevent user input if the timer has expired */}
      <TypingPracticeField onFirstKeyPress={() => setStartTimer(true)} preventInput={timerExpired} />
      {/* should i modularize above component into more components? */}

      <UserTypingStats/>

    </>
  )
}

export default App;










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

