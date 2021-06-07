import img from "../static/myPic.jpg"
import russ from "../static/russ.jpg"


function About(props) {
    return (
        <div>
            <div className="desktop">
                <div className="About">
                    <div className="nameTag">
                        <div className="myName">Caleb R. Northcott</div>
                        <div className="myTitle">Software/Web Developer</div>
                    </div>
                    <div className="meTag">Me</div>
                    <div className="intro">
                        <img alt="profilePic" className="mypic" src={img}></img>
                        <div className="bios">
                            <p className="bio">I graduated from Eckerd College in May of 2021 with a B.S. in Computer Science and a minor in Economics. My software related work experience consists of Web Development and Data Analysis,
                    however I have also been a busser, line-cook, professional mover, tutor, pallet stacker, and soccer referee. As you probably can guess, I love to work and strive to add value to everything I do. </p>
                            <p className="bioPersonal">When I am not working, you can find me outside with my dog, playing beach volleyball, fishing, or fiddling with one of my side projects. </p>
                        </div>
                    </div>

                    <div className="mySkills">
                        <div className="webDevelop">
                            <h2 className="web">Web Development</h2>
                            <div className="skills">
                                <div className="backend">
                                    <h3 className="backendList">Backend</h3>
                                    <ul className="skillsListBackend">
                                        <li>AWS</li>
                                        <li>SQL</li>
                                        <li>NoSQL</li>
                                        <li>Django</li>
                                        <li>Flask</li>
                                        <li>PHP</li>
                                    </ul>
                                </div>
                                <div className="frontend">
                                    <h3 className="frontendList">Frontend</h3>
                                    <ul className="skillsList">
                                        <li>Node.JS</li>
                                        <li>React.JS</li>
                                        <li>Angular.JS</li>
                                        <li>TypeScript</li>
                                        <li>JavaScript</li>
                                        <li>HTML</li>
                                        <li>CSS/SASS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img alt="Russ" className="russ" src={russ}></img>
                        <div className="otherLang">
                            <h2 className="other">Languages</h2>
                            <ul className="skillsListOther">
                                <li>Java</li>
                                <li>C#</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>R</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>

                    <div className="russTag">My dog, Russel</div>
                </div>
            </div>
            <div className="mobile">
                <div className="about-mobile">
                    <div className="nameTag-mobile">
                        <div className="myName-mobile">Caleb R. Northcott</div>
                        <div className="myTitle-mobile">Software/Web Developer</div>
                    </div>
                    <img alt="profilePic" className="mypic-mobile" src={img}></img>
                    <div className="bios-mobile">
                        <p className="bio-mobile">I graduated from Eckerd College in May of 2021 with a B.S. in Computer Science and a minor in Economics. My software related work experience consists of Web Development and Data Analysis,
                    however I have also been a busser, line-cook, professional mover, tutor, pallet stacker, and soccer referee. As you probably can guess, I love to work and strive to add value to everything I do. </p>
                        <p className="bioPersonal-mobile">When I am not working, you can find me outside with my dog, playing beach volleyball, fishing, or fiddling with one of my side projects. </p>
                    </div>
                    <div className="mySkills-mobile">
                        <div className="webDevelop-mobile">
                            <h2 className="web-mobile">Web Development</h2>
                            <div className="skills-mobile">
                                <h3 className="backendList-mobile">Backend</h3>
                                <div className="skillsListBackend-mobile">
                                    <div className="left-list">
                                        <p>AWS</p>
                                        <p>SQL</p>
                                        <p>NoSQL</p>
                                    </div>
                                    <div className="right-list">
                                        <p>Django</p>
                                        <p>Flask</p>
                                        <p>PHP</p>
                                    </div>
                                </div>
                                <h3 className="frontendList-mobile">Frontend</h3>
                                <div className="skillsList-mobile">
                                    <div className="left-list">
                                        <p>Node.JS</p>
                                        <p>React.JS</p>
                                        <p>Angular.JS</p>
                                        <p>TypeScript</p>
                                    </div>
                                    <div className="right-list">
                                        <p>JavaScript</p>
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>SASS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="otherLang-mobile">
                            <h2 className="other-mobile">Languages</h2>
                            <div className="skillsListOther-mobile">
                                <div className="left-list">
                                    <p>Java</p>
                                    <p>C#</p>
                                    <p>C++</p>
                                </div>
                                <div className="right-list">
                                    <p>Python</p>
                                    <p>R</p>
                                    <p>Git</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;