import card from "../static/card.svg"
import phone from "../static/phone.svg"
import pin from "../static/pin.svg";
import mail from "../static/mail.svg";
import linkedIn from "../static/linkedin.png";
import github from "../static/github.png";
import resume from "../static/resume.svg";
import pdf from "../static/Resume.pdf"

function Contact(props) {


    return (
        <div>
            <div className="desktop-contact">
                <div className="Contact">
                    <img className="card" alt="icon" src={card} />
                    <div className="nameTag-contact">
                        <div className="myName-contact">Caleb R. Northcott</div>
                        <div className="myTitle-contact">Software/Web Developer</div>
                        <div className="underLine"></div>
                    </div>
                    <div className="methods">
                        <div className="phone">
                            <img className="phone-icon" alt="icon" src={phone} />
                            <div className="phoneNum">(603)-921-6201</div>
                        </div>
                        <div className="address">
                            <img className="pin-icon" alt="icon" src={pin} />
                            <div className="fullAddy">
                                <div className="addyOne">14 Powers Road, Hollis</div>
                                <div className="addyTwo">NH 03049</div>
                            </div>
                        </div>
                        <div className="mail">
                            <img className="mail-icon" alt="icon" src={mail} />
                            <a className="emailLink" href="mailto:crnorthc99@gmail.com" ><div className="email">crnorthc@gmail.com</div></a>
                        </div>
                    </div>
                    <div className="socials">
                        <a className="linkedIn-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/caleb-northcott/"><img className="linkedin" alt="icon" src={linkedIn} /></a>
                        <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/crnorthc"><img className="github" alt="icon" src={github} /></a>
                        <a className="github-link" target="_blank" rel="noopener noreferrer" href={pdf}><img className="resume" alt="icon" src={resume} /></a>
                    </div>
                </div>
            </div>
            <div className="mobile-contact">

            </div>
        </div>


    )
}

export default Contact;