import { Routes, Route, Link, useLocation } from 'react-router-dom';

import HomePage from '../pages/HomePage.jsx';
import BasicTypingTestsPage from '../pages/BasicTypingTestsPage.jsx'
import LeaderboardsPage from '../pages/LeaderboardsPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import ContactUsPage from '../pages/ContactUsPage.jsx'

import '../styles/Navbar.css';


function Navbar () {

    return (
        <>
            {/* <TimedTypingTest></TimedTypingTest> */}
            <div className='navbar'>
            {/* <nav> */}
                <Link className={`${ useLocation().pathname === '/' ? 'active' : '' }`} to='/'>Home</Link>
                <Link className={`${ useLocation().pathname === '/BasicTypingTestsPage' ? 'active' : '' }`} to='/BasicTypingTestsPage'>Basic Typing Tests</Link>
                <Link className={`${ useLocation().pathname === '/LeaderboardsPage' ? 'active' : '' }`} to='/LeaderboardsPage'>Leaderboards</Link>
                <Link className={`${ useLocation().pathname === '/AboutPage' ? 'active' : '' }`} to='/AboutPage'>About</Link>
                <Link className={`${ useLocation().pathname === '/ContactUsPage' ? 'active' : '' }`} to='/ContactUsPage'>Contact Us</Link>
            {/* </nav> */}
            </div>

            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/BasicTypingTestsPage' element={<BasicTypingTestsPage/>} />
                <Route path='/LeaderboardsPage' element={<LeaderboardsPage/>} />
                <Route path='/AboutPage' element={<AboutPage/>} />
                <Route path='/ContactUsPage' element={<ContactUsPage/>} />
            </Routes>
        </>
    )
}

export default Navbar;