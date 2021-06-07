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
    const [attribute, setAttribute] = useState("Work");
    const [nextAttribute, setNextAttribute] = useState("Attitude");
    const [description, setDescription] = useState("Calculated");
    const [nextDescription, setNextDescription] = useState("Positive");
    const [countM, setCountM] = useState(0);
    const [timeM, setTimeM] = useState(100);
    const [steps, setSteps] = useState([false, false, false]);
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    const phrases = [["Work", "Calculated"], ["Attitude", "Positive"], ["Ambition", "High"], ["Creativity", "Youthful"], ["Strategy", "Planned"], ["Ego", "Modest"], ["Goals", "Planned"]]

    /*
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
    
        */
    // Mobile text scramnble
    useEffect(() => {

        function nextWord(index, word) {
            setCountM(index);
            setNextAttribute(phrases[word][0]);
            setNextDescription(phrases[word][1]);
            setSteps([false, false, false]);
        }

        function swapLetters(attr) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            if (attr) {
                while (true) {
                    const index = Math.floor(Math.random() * attribute.length);
                    if (!chars.includes(attribute[index])) {
                        setAttribute(attribute.substring(0, index) + char + attribute.substring(index + 1));
                        break;
                    }
                }
            }
            else {
                while (true) {
                    const index = Math.floor(Math.random() * description.length);
                    if (!chars.includes(description[index])) {
                        setDescription(description.substring(0, index) + char + description.substring(index + 1));
                        break;
                    }
                }
            }
        }

        function swapSymbols(attr = false) {
            if (attr) {
                while (true) {
                    const index = Math.floor(Math.random() * attribute.length);
                    if (chars.includes(attribute[index])) {
                        setAttribute(attribute.substring(0, index) + nextAttribute[index] + attribute.substring(index + 1));
                        break;
                    }
                }
            }
            else {
                while (true) {
                    const index = Math.floor(Math.random() * description.length);
                    if (chars.includes(description[index])) {
                        setDescription(description.substring(0, index) + nextDescription[index] + description.substring(index + 1));
                        break;
                    }
                }
            }
        }

        function changeSymbols(attr = false) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            if (attr) {
                const index = Math.floor(Math.random() * attribute.length);
                setAttribute(attribute.substring(0, index) + char + attribute.substring(index + 1));
            }
            else {
                const index = Math.floor(Math.random() * description.length);
                setDescription(description.substring(0, index) + char + description.substring(index + 1));
            }
        }

        function removeSymbols(attr = false) {
            if (attr) {
                const index = Math.floor(Math.random() * attribute.length);
                setAttribute(attribute.substring(0, index) + attribute.substring(index + 1));
            }
            else {
                const index = Math.floor(Math.random() * description.length);
                setDescription(description.substring(0, index) + description.substring(index + 1));
            }
        }

        function addSymbols(attr = false) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            if (attr) {
                const index = Math.floor(Math.random() * attribute.length);
                if (index !== 0) {
                    setAttribute(attribute.substring(0, index) + char + attribute.substring(index))
                }
                else {
                    setAttribute(char + attribute.substring(0))
                }
            }
            else {
                const index = Math.floor(Math.random() * description.length);
                if (index !== 0) {
                    setDescription(description.substring(0, index) + char + description.substring(index))
                }
                else {
                    setDescription(char + description.substring(0))
                }
            }
        }

        function stepOne(item, attr) {
            for (let i = 0; i < item.length; i++) {
                if (!chars.includes(item[i])) {
                    swapLetters(attr);
                    return 1;
                }
            }
            return 0;
        }

        function stepThree(item, attr) {
            for (let i = 0; i < item.length; i++) {
                if (chars.includes(item[i])) {
                    swapSymbols(attr);
                    break;
                }
            }
        }

        const interval = setInterval(() => {

            if (attribute !== nextAttribute || description !== nextDescription) {
                ;
                setTimeM(80);
                var swappedLetters = 0;

                if (!steps[0]) {
                    swappedLetters += stepOne(attribute, true);
                    swappedLetters += stepOne(description, false);
                    if (swappedLetters === 0) {
                        setSteps([true, false, false]);
                    }
                }

                if (steps[0] && !steps[1]) {
                    if (attribute.length > nextAttribute.length) {
                        removeSymbols(true);
                    }
                    if (attribute.length < nextAttribute.length) {
                        addSymbols(true);
                    }
                    if (description.length > nextDescription.length) {
                        removeSymbols();
                    }
                    if (description.length < nextDescription.length) {
                        addSymbols();
                    }
                    if (attribute.length === nextAttribute.length && description.length !== nextDescription.length) {
                        changeSymbols(true);
                    }
                    if (description.length === nextDescription.length && attribute.length !== nextAttribute.length) {
                        changeSymbols();
                    }
                    if (attribute.length === nextAttribute.length && description.length === nextDescription.length) {
                        setSteps([true, true, false]);
                    }
                }

                if (steps[1] && !steps[2]) {
                    stepThree(attribute, true);
                    stepThree(description, false);
                }
            }
            else {
                setTimeM(2000);
                if (countM === 5) {
                    nextWord(6, 0);
                }
                if (countM === 6) {
                    nextWord(0, 1);
                }
                if (countM < 5) {
                    nextWord(countM + 1, countM + 2);
                }
            }

        }, timeM);
        return () => clearInterval(interval)
    });

    const cursor = (
        <div className="cursor">|</div>
    )

    const logo = (
        <img className="iconHome" alt="icon" src={icon} />
    )

    const JSXify = (item) => {
        var jsx = [];
        if (item === "Youthful") {
            return (
                <span className="youthful">Youthful</span>
            )
        }
        for (let i = 0; i < item.length; i++) {
            if (chars.includes(item[i])) {
                jsx.push(
                    <span className="symbol">{item[i]}</span>
                )
            }
            else {
                jsx.push(
                    <span>{item[i]}</span>
                )
            }
        }
        return jsx;
    }


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
                    <div className="tagline-mobile">My</div>
                    <div className="attribute">{JSXify(attribute)}</div>
                    <div className="tagline-mobile">{attribute === "Goals" ? "are" : "is"}</div>
                    <div className="description">{JSXify(description)}</div>
                </div>
                <div className="buttons-mobile">
                    <a href="/about" className="aboutButton">ABOUT</a>
                    <a href="/contact" className="contactButton">CONTACT</a>
                </div>
            </div>
        </div>

    )
}

export default Home;