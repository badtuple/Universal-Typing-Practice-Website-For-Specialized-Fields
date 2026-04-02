import {useState, useEffect} from 'react';

import TypingTest from '../components/TypingTest';

// import '../App.css';


function BasicTypingTestsPage () {

    // below 2 lines are temporary.. move elsewhere when taking on different approach to avoid prop drilling
    const [typingTestChoice, setTypingTestChoice] = useState('timed')
    // setTypingTestChoice('timed')

    return (
        <>
            {/* <div className=''></div> */}
            <h1>Basic Typing Tests</h1>

            <TypingTest typingTestChoice={typingTestChoice} ></TypingTest>
        </>
    )
}

export default BasicTypingTestsPage;