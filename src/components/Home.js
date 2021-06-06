import React, { useState, useEffect } from 'react';
import icon from "../static/Logo.svg";



function Home(props) {
    // Desktop welcome message
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState("Welcome!");
    const [count, setCount] = useState(0);
    const [back, setBack] = useState(false);
    const [time, setTime] = useState(150);
    const [display, setDisplay] = useState(false);
    const welcomeMessages = ["I am Caleb Northcott", "And this is my Portfolio"];

    // Mobile scrambled text
    const [a_length, setA_length] = useState();
    const [d_length, setD_length] = useState();
    const [lettersA, setLettersA] = useState([]);
    const [lettersD, setLettersD] = useState([]);
    const [counterA, setCounterA] = useState();
    const [counterD, setCounterD] = useState();
    const [attribute, setAttribute] = useState("Ambition");
    const [description, setDescription] = useState("High");
    const [countM, setCountM] = useState(0);
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    const phrases = [["Work", "Calculated"], ["Attitude", "Positive"], ["Ambition", "High"]]


    const replace_SwithL = (attribute_length, new_attribute) => {
        var count = 0;
        for (let i = 0; i < attribute_length; i++) {
            if (lettersA[i] === 3) {
                count++;
            }
            if (lettersA[i] === 2 && count === counterA) {
                setAttribute(attribute.substring(0, i) + new_attribute[counterA] + attribute.substring(i + 1));
                const start = lettersA.slice(0, i - 1);
                const end = lettersA.slice(i + 1);
                setLettersA([...start, 3, ...end]);
                setCounterA(counterA + 1);
                break;
            }
        }
    }

    const replace_LwithS = (attribute_length) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        for (let i = 0; i < attribute_length; i++) {
            if (lettersA[i] === 1) {
                while (true) {
                    const index = Math.floor(Math.random() * attribute.length);
                    if (lettersA[index] === 1) {
                        setAttribute(attribute.substring(0, index) + char + attribute.substring(index + 1));
                        const start = lettersA.slice(0, index - 1);
                        const end = lettersA.slice(index + 1);
                        setLettersA([...start, 2, ...end]);
                        break;
                    }
                }
                break;
            }
        }
    }

    const add_symbol = () => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const index = Math.floor(Math.random() * attribute.length);
        setAttribute(attribute.substring(0, index) + char + attribute.substring(index))
        lettersA[index] = 2;
        lettersA[attribute.length - 1] = 1;
    }



    useEffect(() => {
        function changeTime(time) {
            setTime(time);
        }

        const interval = setInterval(() => {
            if (title.length <= 0 && count <= 2 && back === true) {
                if (count === 2) {
                    setDisplay(true);
                    return
                }
                setMessage(welcomeMessages[count]);
                setCount(count + 1);
                setBack(false);
            }
            if (back === false) {
                setTitle(message.substring(0, title.length + 1));
            }
            if (back === true) {
                changeTime(150);
                setTitle(title.substring(0, title.length - 1));
            }
            if (title.length === message.length && back === false) {
                changeTime(2000);
                setBack(true);
            }
        }, time);
        return () => clearInterval(interval);
    });


    // Mobile text scramnble
    useEffect(() => {
        const interval = setInterval(() => {
            setCounterA(0);
            setLettersA([]);
            if (countM === 2) {
                setCountM(0);
            }
            const new_attribute = phrases[countM][0];
            const new_description = phrases[countM][1];
            const attribute_length = Math.max(new_attribute.length, attribute.length);
            const description_length = Math.max(new_description.length, description);
            const remove = new_attribute.length < attribute.length;

            for (let i = 0; i < attribute_length; i++) {
                //string index is a old letter
                if (i < attribute.length - 1) {
                    setLettersA([...lettersA, 1])
                }
                //string index is blank
                else {
                    setLettersA([...lettersA, 0])
                }
                //if string index is a symbol - 2
                //if string index is a new letter - 3
            }
            for (let i = 0; i < description_length; i++) {
                //string index is a old letter
                if (i < description.length - 1) {
                    setLettersD([...lettersD, 1])
                }
                //string index is blank
                else {
                    setLettersD([...lettersD, 1])
                }
                //if string index is a symbol - 2
                //if string index is a new letter - 3
            }

            while (attribute !== new_attribute) {
                if (attribute.length === new_attribute.length) {
                    replace_SwithL(attribute_length);
                }
                else {
                    const next = Math.floor(Math.random() * 4);

                    if (next === 0 && !remove) {
                        add_symbol();
                    }
                    if (next === 1) {
                        replace_SwithL(attribute_length);
                    }
                    if (next === 2) {
                        replace_LwithS(attribute_length);
                    }
                }
            }


        }, 1000);
        return () => clearInterval(interval)
    })

    const cursor = (
        <div className="cursor">|</div>
    )

    const logo = (
        <img className="iconHome" alt="icon" src={icon} />
    )


    return (
        <div>
            <div className="desktop">
                <div className="homeHeader">
                    <div className="name">{title}</div>
                    {display ? logo : cursor}
                    <div className="nameWrapper"></div>
                </div>
                <div className="tagline">A computer science graduate inspired by Web Technologies seeking a career in Software Development.</div>
                <div className="buttons">
                    <a href="/about" className="aboutButton">ABOUT</a>
                    <a href="/contact" className="contactButton">CONTACT</a>
                </div>
            </div>
            <div className="mobile">
                <div className="homeHeader-mobile">
                    <img className="iconHome-mobile" alt="icon" src={icon} />
                    <div className="nameWrapper-mobile"></div>
                </div>
                <div className="taglines-mobile">
                    My {attribute}: {description}
                </div>
            </div>
        </div>

    )
}

export default Home;