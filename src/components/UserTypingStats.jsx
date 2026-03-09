import {useState, useEffect} from 'react'

import '../App.css'


function UserTypingStats ({timeElapsed, wordsTyped, charTypedCorrectly, totalCharTyped}) {
    const [avgWpm, setAvgWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(0);

    const calcAvgWpm = function() {
        return wordsTyped / timeElapsed;
    }

    const calcAccuracy = function(){
        return 100 * (charTypedCorrectly / totalCharTyped);
    }

    const displayStats = function() {
        let avgWpmStat = <span>{calcAvgWpm}</span>
        let accuracyStat = <span>{calcAccuracy}</span>

        return `Average WPM: ${avgWpmStat}\nAccuracy: ${accuracyStat}`;
    }

    return (
        <>
        <div className='typingStats' tabIndex='3'>{displayStats()}</div>
        </>
    )
}

export default UserTypingStats;