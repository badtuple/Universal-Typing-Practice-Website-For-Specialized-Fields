import QuickLinkCard from '../components/common/QuickLinkCard.jsx';
import CustomTestSectionForm from '/src/components/custom-test-section/CustomTestSectionForm.jsx';

import '/src/App.css';


function BasicTypingTestsPage () {

    return (
        <>
            <div className='genericPageTitle'>Basic Typing Tests</div>

            <div className='genericSectionTitle'>Word-Count Tests</div>
            <span className='quickStartTestRow'>
                <QuickLinkCard className='quickLinkCardSmall' cardText={'100 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} testTime={null} testWords={100} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'500 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} testTime={null} testWords={500} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'1000 WORDS'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'word-count'} testTime={null} testWords={1000} />
            </span>

            <div className='genericSectionTitle'>Timed Tests</div>
            <span className='quickStartTestRow'>
                <QuickLinkCard className='quickLinkCardSmall' cardText={'1 MINUTE'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} testTime={60} testWords={null} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'2 MINUTES'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} testTime={120} testWords={null} />
                <QuickLinkCard className='quickLinkCardSmall' cardText={'3 MINUTES'} linkTo={'/BasicTypingTests/TypingTest'} typingTestChoice={'timed'} testTime={180} testWords={null} />
            </span>

            <div className='genericSectionTitle'>Custom Test</div>
            <CustomTestSectionForm />

        </>
    )
}

export default BasicTypingTestsPage;