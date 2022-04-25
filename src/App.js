import React from 'react'
import Passport from './images/passport.jpg'
import email from './images/svg/envelope.svg'
import linkedin from './images/svg/linkedin.svg'
import facebook from './images/svg/facebook-square.svg'
import twitter from './images/svg/twitter-square.svg'
import github from './images/svg/github-square.svg'
import instagram from './images/svg/instagram-square.svg'

export default function App(){
    return(
        <main>
            <Header />
        </main >
    )
}

function Header(){
    return(
        <div className='header'>
            <img src={Passport} width='317' height='317' className='photo' />
            <h3>Olumide Bambe</h3>
            <p className='occupation'>Software Engineer (Intern)</p>
            <span className='website'>olumidebambe.com</span><br/>
            <div className='buttonContainer'>
                <Email />
                <Linkedin />
            </div>

            <About />
            <Interest />
            <Footer />
        </div>
    )
}

function Email(){
    return (
    <button className='email'>
        <img src={email} width='12.8' height='9.6' />
        <span className='span-email'>Email</span>
    </button>
    )
}
function Linkedin(){
    return (
    <button className='linkedin'>
        <img src={linkedin} width='12.8' height='9.6' />
        <span className='span-linkedin'>Linkedin</span>
    </button>
    )
}

function About(){
    return(
    <>
        <h2>About</h2>
        <p className='notes'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    </>    
    )
}
function Interest(){
    return(
    <>
        <h2 className='interest'>Interest</h2>
        <p className='notes'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </>    
    )
}

function Footer(){
    return(
        <footer>
            <img src={twitter} alt='twitter' className='social'/>
            <img src={facebook} alt='facebook' className='social'/>
            <img src={instagram} alt='instagram' className='social'/>
            <img src={github} alt='github' className='social'/>
        </footer>
    )
}