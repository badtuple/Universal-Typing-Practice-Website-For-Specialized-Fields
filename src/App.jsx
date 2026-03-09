import TimedTypingTest from './components/TimedTypingTest.jsx';

// Main App function to be exported to main.jsx & index.html
function App() {

  return (
    <>
      <TimedTypingTest></TimedTypingTest>
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

