import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Profile from '../../media/Profile.jpg';
import PythonLogo from '../../media/python.jpg';
import ReactLogo from '../../media/react.png';
import uiLogo from '../../media/ui_logos.jpeg';

import './AboutMe.css';
import pdf from "../../media/Nikhita_More.pdf";
class AboutMe extends React.Component {

    render() {
        return (
            <>
                <Row id="AboutMe" >
                    <Col id="aboutme" lg={6}>
                        <img className='slide-in-bottom' src={Profile} alt="Profile image" style={{ width: "90%", height: "90%", padding: "10%", borderRadius: "18px" }} />
                    </Col>
                    <Col className='slide-in-bottom' id="aboutme" lg={5} style={{ padding: "5% 5% 0 0 ", color: "#000" }}>
                        <h3>ABOUT ME</h3>
                        <br></br>
                        <h3 style={{ fontWeight: "700" }}>Creative Web Developer based in Pune, India</h3>
                        <br />
                        <p>Creative Independent Web Developer based in India
                            I'm web designer, and I'm very passionate and dedicated to my work. With 3 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>

                        <br />
                        <button style={{ backgroundColor: "black", color: "#fff", height: "50px", width: "190px" }}><a style={{textDecoration:"none",color: "#fff"}} href={pdf} download>Download CV</a></button>
                        
                    </Col>

                </Row>
                <Row id="aboutme">

                    <Col id="aboutme" lg={4} style={{ color: "#000", padding: "3%" }}>
                        <br/>
                        <h4 style={{ color: "#000" }}>SKILLS</h4>
<br/>
                        I have high skills in developing and programming
                        I am working on a professional, visually sophisticated and technologically proficient and responsive.
                    </Col>
                    <Col id="aboutme" lg={8} style={{ color: "#000", padding: "3%" }}>
                        <Row>
                            <Col id="aboutme" lg={6} style={{ color: "#000", padding: "3%" }}><img src={uiLogo} alt="React JS" style={{ width: 250, height: 150, margin: "10%", borderRadius: "18px" }} /></Col>
                            <Col id="aboutme" lg={6} style={{ color: "#000", padding: "3%" }}><img src={PythonLogo} alt="Python" style={{ width: 250, height: 150, margin: "10%", borderRadius: "18px" }} /></Col>

                        </Row>
                    </Col>

                </Row>
            </>
        );
    };

}
export default AboutMe




