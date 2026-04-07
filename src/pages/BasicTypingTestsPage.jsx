import {useState, useEffect} from 'react';

import QuickLinkCard from '../components/common/QuickLinkCard';

import '/src/App.css';


function BasicTypingTestsPage () {

    // below 2 lines are temporary.. move elsewhere when taking on different approach to avoid prop drilling
    // const [typingTestChoice, setTypingTestChoice] = useState('timed')
    // setTypingTestChoice('timed')

    return (
        <>
            {/* <div className=''></div> */}
            {/* <h1>Basic Typing Tests</h1> */}
            <div className='genericPageTitle'>Basic Typing Tests</div>

            <div className='genericSectionTitle'>Word-Count Tests</div>
            <span className='quickStartTestRow'>
                <QuickLinkCard className='quickLinkCardSmall' cardText={'100 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'500 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'1000 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} />
            </span>

            <div className='genericSectionTitle'>Timed Tests</div>
            <span className='quickStartTestRow'>
                <QuickLinkCard className='quickLinkCardSmall' cardText={'1 MINUTE'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'2 MINUTES'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'3 MINUTES'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} />
            </span>

        </>
    )
}

export default BasicTypingTestsPage;