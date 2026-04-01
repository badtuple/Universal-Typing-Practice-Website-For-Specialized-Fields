// import { useState, useEffect } from 'react';

import '../../App.css';


function SeeResultsButton({timerExpired, wordCountReached}) {


    const showResults = function() {
        // insert action to do when button is clicked here?
    }

    const displayButton = function() {
        if (timerExpired || wordCountReached) {
            return <button className='resultsButton' tabIndex='4'>See Results</button>
        }
        else {
            return null
        }
    }

    return (
        <>
        {displayButton()}
        </>
    )
}


export default SeeResultsButton;