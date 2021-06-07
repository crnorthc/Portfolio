import React from 'react';
import icon from "../static/Logo.svg";

const About = (
    <a href="/about" className="about">ABOUT</a>
);

const AboutActive = (
    <a href="/about" className="aboutActive">ABOUT</a>
);

const Contact = (
    <a href="/contact" className="contact">CONTACT</a>
);

const ContactActive = (
    <a href="/contact" className="contactActive">CONTACT</a>
);

const AboutMobile = (
    <a href="/about" className="aboutMobile">ABOUT</a>
);

const AboutActiveMobile = (
    <a href="/about" className="aboutActive-mobile">
        <span className="dot">&mdash;</span> ABOUT <span className="dot">&mdash;</span>
    </a>
);

const ContactMobile = (
    <a href="/contact" className="contact-mobile">CONTACT</a>
);

const ContactActiveMobile = (
    <a href="/contact" className="contactActive-mobile">
        <span className="dot">&mdash;</span> CONTACT <span className="dot">&mdash;</span>
    </a>
);

const dropDown = (
    <div className='dropContent'>
        <div className='seperator' />
        {(window.location.pathname === "/about") ? AboutActiveMobile : AboutMobile}
        <div className='seperator' />
        {(window.location.pathname === "/contact") ? ContactActiveMobile : ContactMobile}
        <div className='seperator' />
    </div>
)


function Navbar(props) {

    return (
        <div>
            <div className="desktop-nav">
                {(window.location.pathname === "/about") ? AboutActive : About}
                <a className="logoLink" href="/"><img className="icon" alt="icon" src={icon} /></a>
                {(window.location.pathname === "/contact") ? ContactActive : Contact}
            </div>
            <div className="mobile-nav">
                <a className="logoLink-mobile" href="/"><img className="icon-mobile" alt="icon" src={icon} /></a>
                <div className='dropDown'>
                    {dropDown}
                </div>
            </div>
        </div>

    )
}

export default Navbar;