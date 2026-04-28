import {useState, useEffect} from 'react';

import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

import '/src/App.css';


function CustomTestOptionsAccordion ({accordionSectionOpen, setAccordionSectionOpen}) {

    // checks if accordion component is clicked
    const updateAccordionStatus = function () {
        if (accordionSectionOpen) {
            setAccordionSectionOpen(false);
        }
        else {
            setAccordionSectionOpen(true);
        }
    }

    return (
        <>
            <div className='customTestOptionsAccordion' onClick={updateAccordionStatus}>
                <IoIosArrowForward className={`arrowIcon ${ accordionSectionOpen ? 'accordionToggle' : '' }`} />
                Custom Test Options
                <IoIosArrowBack className={`arrowIcon ${ accordionSectionOpen ? 'accordionToggle' : '' }`} />
            </div>
        </>
    )
}

export default CustomTestOptionsAccordion;