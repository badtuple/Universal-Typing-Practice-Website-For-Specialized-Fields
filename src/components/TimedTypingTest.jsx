import {useState} from 'react';

import Timer from './Timer.jsx';
import TypingPracticeField from './TypingPracticeField.jsx'
import UserTypingStats from './UserTypingStats.jsx'

// This component 
function TimedTypingTest() {
    // looks like we may have to insert code for managing state between components here (TypingPracticeField may need to emit an event for Timer to accept so it knows when to start the count down)
    // 2 states for: whether user has started typing & whether timer has expired
    const [startTimer, setStartTimer] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    
    return (
        <>
            <h1>THE "TimedTypingTest" COMPONENT BEGINS HERE</h1>

            {/* Timer's props are 1 input: startTimer bool to determine when to start countdown & 1 output: when countdown reaches 0 function is called outside component to set timerExpired bool to true */}
            <Timer startTimer={startTimer} onTimerExpire={() => setTimerExpired(true)} />
            {/* TypingPracticeField's props are 1 output: on user's first input set startTimer to true & 1 input: timerExpired bool to prevent user input if the timer has expired */}
            <TypingPracticeField onFirstKeyPress={() => setStartTimer(true)} preventInput={timerExpired} />
            {/* should i modularize above component into more components? */}

            <UserTypingStats/>

        </>
    )
}

export default TimedTypingTest;