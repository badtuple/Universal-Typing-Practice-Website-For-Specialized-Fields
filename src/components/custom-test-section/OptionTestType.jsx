import {useState, useEffect} from 'react';

import GenericRadioButton from './GenericRadioButton';
import OptionGeneratedTextModifiers from './OptionGenTextModifiers';
import TimerUserInputBox from './TimerUserInputBox';
import * as CONSTANTS from '/src/utils/constants';

import '/src/App.css';


function OptionTestType ({accordionSectionOpen}) {

    // const [accordionSectionOpen, setAccordionSectionOpen] = useState(false)
    const [selectedTest, setSelectedTest] = useState('')
    const [selectedTestTypeOption, setSelectedTestTypeOption] = useState('')
    const [testTypeOptionsList, setTestTypeOptionsList] = useState([])

    const [userCustomTextWordCount, setUserCustomTextWordCount] = useState(0)

    useEffect( () => {
        if (selectedTest === 'Word-Count Based') {
            setTestTypeOptionsList(['100 Words', '500 Words', '1000 Words', '2000 Words', 'Custom Text'])
        }
        else if (selectedTest === 'Timer Based') {
            setTestTypeOptionsList(['30 secs', '1 min', '2 mins', '3 mins', '5 mins', 'Custom Time'])
        }
    }, [selectedTest, selectedTestTypeOption])

    useEffect ( () => {
        if (selectedTestTypeOption === '') {
            console.log('idk')
        }
    })

    const updatedTextAreaInput = function (userInput) {
        
        setUserCustomTextWordCount(CONSTANTS.calcWordCount(userInput))
    }

    // // checks if accordion component is clicked
    // const updateAccordionStatus = function () {
    //     if (accordionSectionOpen) {
    //         setAccordionSectionOpen(false);
    //     }
    //     else {
    //         setAccordionSectionOpen(true);
    //     }
    // }

    return (
        <>
            <GenericRadioButton optionsList={['Word-Count Based', 'Timer Based']} rowLabel='Test Type: ' selectedOption={selectedTest} setSelectedOption={setSelectedTest} />
            <GenericRadioButton optionsList={testTypeOptionsList} rowLabel='' selectedOption={selectedTestTypeOption} setSelectedOption={setSelectedTestTypeOption} />

            {/* {selectedTest === 'Timer Based' ? <OptionGeneratedTextModifiers/> : null} */}

            <div className={accordionSectionOpen && selectedTest === 'Timer Based' && selectedTestTypeOption === 'Custom Time' ? 'customTimeGroup' : 'contentHidden'}>
                {/* <label htmlFor='timeLimit'>Time Limit: </label> */}
                {/* <input type="number" max='99' min='0' step='1' required /> */}
                {/* <input type="number" max='59' min='0' step='1' required /> */}
                {/* <input type="text" placeholder="00:00" pattern="[0-5]?[0-9]:[0-5][0-9]" maxLength={5} /> */}
                <TimerUserInputBox />
            </div>

            <div className={accordionSectionOpen && selectedTest === 'Timer Based' ? '' : 'contentHidden'}>
                <OptionGeneratedTextModifiers/>
            </div>

            <div className={accordionSectionOpen && selectedTest === 'Word-Count Based' && selectedTestTypeOption === 'Custom Text' ? '' : 'contentHidden'}>
                <div className='customTextAreaRow'>
                    <div className='customTextAreaWordCounterGroup'>
                        <label className='customTextAreaWordCounterLabel' htmlFor='wordCount' >Words: </label>
                        <input className='customTextAreaWordCounter' id='wordCount' type='counter' placeholder='' name='userCustomTextWordCount' value={userCustomTextWordCount} disabled />
                    </div>
                    <textarea className='customTextArea' placeholder='Type or paste your custom text here...' name='usersCustomText' onInput={(e) => updatedTextAreaInput(e.target.value)} required />
                </div>
            </div>
            
            {/* <div className='customTestOptionsAccordion' onClick={updateAccordionStatus}>
            </div> */}
        </>
    )
}

export default OptionTestType;