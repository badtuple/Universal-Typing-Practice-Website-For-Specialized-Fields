// import {useState, useEffect} from 'react';

import '/src/App.css';


function GenericRadioButton () {

    // const [accordionSectionOpen, setAccordionSectionOpen] = useState(false)

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
            <div className='customTestOptionsAccordion' onClick={updateAccordionStatus}>
                <span></span>
            </div>
        </>
    )
}

export default GenericRadioButton;