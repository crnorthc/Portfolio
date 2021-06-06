import React from 'react';
import icon from "../static/Logo.svg"

const About = (
    <a href="/about" className="about">ABOUT</a>
)

const AboutActive = (
    <a href="/about" className="aboutActive">ABOUT</a>
)

const Contact = (
    <a href="/contact" className="contact">CONTACT</a>
)

const ContactActive = (
    <a href="/contact" className="contactActive">CONTACT</a>
)


function Navbar(props) {
    return (
        <div className="navbar">
            { (window.location.pathname == "/about") ? AboutActive : About}
            <a className="logoLink" href="/"><img className="icon" alt="icon" src={icon} /></a>
            { (window.location.pathname == "/contact") ? ContactActive : Contact}
        </div>
    )
}

export default Navbar;