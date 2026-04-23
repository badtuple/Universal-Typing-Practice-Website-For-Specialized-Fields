import {useState} from 'react';

import '/src/App.css';


function TextAreaUserInputBox () {

    const [userCustomTextWordCount, setUserCustomTextWordCount] = useState(0)

    const updatedTextAreaInput = function (userInput) {
        setUserCustomTextWordCount(CONSTANTS.calcWordCount(userInput))
    }

    return (
        <>
            <div className='customTextAreaRow'>
                <div className='customTextAreaWordCounterGroup'>
                    <label className='customTextAreaWordCounterLabel' htmlFor='wordCount' >Words: </label>
                    <input className='customTextAreaWordCounter' id='wordCount' type='counter' placeholder='' name='userCustomTextWordCount' value={userCustomTextWordCount} disabled />
                </div>
                <textarea className='customTextArea' placeholder='Type or paste your custom text here...' name='usersCustomText' onInput={(e) => updatedTextAreaInput(e.target.value)} required />
            </div>
        </>
    )
}

export default TextAreaUserInputBox;