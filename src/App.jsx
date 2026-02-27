import { useState } from 'react';
// import AutosizeInput from 'react-input-autosize';
import './App.css'
import * as CONSTANTS from './misc/constants.jsx'
import { isAlphNum } from './misc/constants.jsx';

// define text box component that when selected, listens for user text input and updates state of text in text box
function TypingPracticeField() {
  const typingPracText = CONSTANTS.TYPING_PRAC_TEXT_SAMPLE_1;
  const typingPracTextArray = typingPracText.split('');
  const [counter, setCounter] = useState(0);
  const [userTextArray, setUserTextArray] = useState([]);

  // const [typeText, setTypeText] = useState(typingPracText)
  // const [userText, setUserText] = useState("")


  let onType = function(currentInputEvent) {
    let currentInputText = currentInputEvent.key

    // Below conditional checks currently typed char and: if userTextArray length matches typingPracTextArray length then "exit" (ie will add code to stop timer, finalize results, unfocus typing practice field component, & display ), else if backspace then pop last item from usertext array and decrement counter by 1, if any other char; then check if currently typed usertext char is same as current index of typepractextArray and if so print current letter as green and if not print current letter as red
    if (userTextArray.length === typingPracTextArray.length) {
      console.log('practice run is complete')
    }
    else if (currentInputEvent.key === 'Backspace') {
      if (counter) {
      console.log('bs ' + counter)
      setCounter(counter - 1)
      // setUserTextArray(userTextArray.pop())
      setUserTextArray(userTextArray.slice(0,-1))
      }
    }
    else if (isAlphNum(currentInputText)) {
    // else if (isAlphNum(currentInputEvent.key)) {
      // userTextArray.push(currentInputText)

      if (currentInputText === typingPracTextArray[counter]) {
        // userTextArray.push(<span className='green'>{currentInputText}</span>)
        setUserTextArray([...userTextArray, <span className='green' key={'userTextArray' + counter}>{currentInputText}</span>])
        console.log(userTextArray)
        // return <span className="green">{userTextArray[counter]}</span>
      }
      else {
        // userTextArray.push(<span className="red">{currentInputText}</span>)
        setUserTextArray([...userTextArray, <span className="red" key={'userTextArray' + counter}>{currentInputText}</span>])
        // setUserTextArray(userTextArray.push(currentInputText))
        // return <span className="red">{userTextArray[counter]}</span>
      }
      // console.log(userTextArray)
      // console.log(counter)
      setCounter(counter + 1)
      // console.log(counter)
    }
  }
  
  // const displayTextArray = userTextArray.concat(typingPracTextArray.slice(userTextArray.length))

  // 
  let displayText = function() {
    let displayTextArray = []
    displayTextArray = displayTextArray.concat(userTextArray).concat(typingPracTextArray.slice(userTextArray.length))
    

    // for (let i in userTextArray) {

    //   return i
    // }
    // for (let i = (userTextArray.length); i < typingPracTextArray.length; i++) {
    //   return typingPracTextArray[i]
    // }

    return displayTextArray
  }
  
  return (
    <div className='typing_practice_field'>
      {/* google bind keydown react webpage */}
      <p>{displayText()}</p>
      <input type="text" value={""} onKeyDown={onType}/>
    </div>
  )
}


// Main App function to be exported to main.jsx & index.html
function App() {
  return (
    <>
      <h1>THE "APP" COMPONENT BEGINS HERE</h1>
      
      <TypingPracticeField />
      {/* should i modularize above component into more components? */}

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

