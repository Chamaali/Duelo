import React from "react";
import HeadingText from "./HeadingText";
import HeadingText2 from "./HeadingText2";
import ParaText from "./ParaText";
import { Button, Card, CardGroup, Container, Row, Column, Col } from "react-bootstrap";
import Button2 from "./Button2";
import './images.css';
//import {ReactComponent as TimeLine} from 'src/logo.svg';
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function Main ()  {

    useEffect ( () =>{
        AOS.init({
            duration: 3000
        });
    }, []);
  return (
    <Container style={{position:'relative'}}>
        <div   data-aos="fade-up"  id="home" >
            <img src="Assests/Image.png" alt="home image" className="home-image"/>
            <HeadingText>IEEE STUDENT BRANCH OF SUSL</HeadingText>
            <ParaText data-aos="fade-up">IEEE, the Institute of Electrical and Electronics Engineers, is the world's largest technical professional organization for advancing technology. It is dedicated to advancing technology for humanity and being on a voyage to enhance human life with the aid of technology. The IEEE student branch of the Sabaragamuwa University of Sri Lanka is nurtured with IEEE influences to improve people's lives with technological advancement. The main objective of the branch is to inherit and retain a high number of members to involve with many community services to serve humanity for a better tomorrow.</ParaText>

            <HeadingText>MISSION AND VISION</HeadingText>
            <ParaText data-aos="fade-up">“Facilitating the recruitment and retention of women in technical disciplines globally leading to a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.”</ParaText>
        
            <HeadingText>AIMS AND OBJECTIVES</HeadingText>
            <ParaText data-aos="fade-up">
                <li>To empower female students with sharpening their Science, Technical Engineering and Mathematical (STEM) skills </li>
                <li>To develop their attitudes and soft skills in order to overcome social barriers </li>
                <li>To encourage them to pursue a successful career in STEM fields</li>            
            </ParaText>
        </div>
        

        <div>
            <HeadingText>AIM OF THE EVENT</HeadingText>
            <ParaText data-aos="fade-up">To provide a valuable opportunity to robotics enthusiasts to showcase their talents and further enhance their technical knowledge by maintaining the competitive and friendly spirit between undergraduates.</ParaText>
        </div>
        
        <div id="agenda">
            <HeadingText >AGENDA</HeadingText>
            <ParaText  data-aos="fade-up">Date: Not Decided Date yet, April 2023</ParaText>
            <div data-aos="fade-up">
                <Row>
                    <Col></Col>
                    <Col className="paragraph-timeline">Start <br/>Competition</Col>
                    <Col></Col>
                    <Col className="paragraph-timeline">Provide <br/>Guidelines</Col>
                    <Col></Col>
                    <Col className="paragraph-timeline">Competition <br/>(15 min for one team)</Col>
                    <Col></Col>
                    <Col className="paragraph-timeline">Tea <br/>Break</Col>
                    <Col></Col>
                    <Col className="paragraph-timeline">Award <br/>Ceremony</Col>
                    <Col></Col>
                </Row>
            </div>
            <img src="Assests/Group 29.svg" className="Group_29"/>

            <Link className="link" to="">View more...</Link>
        </div>
        
        <div>
            <HeadingText id="guideline">RULES AND REGULATIONS</HeadingText>
            <div data-aos="fade-up">
                <ParaText>The contestants are required to comply with the terms and conditions of the Robot Battle. These rules and regulations have been drawn up by the board of judges of this contest with the involvement of organizers. The guidelines for the competition are as follows:</ParaText>
            </div>
            <ParaText data-aos="fade-up">
                <li>Undergraduates of any University or Higher Educational Institute are eligible to participate in this competition.</li>
                <li>By registering for this contest, you hereby agree to receive results on the complication depending on the effort.</li>
                <li>A team must consist of …. members.</li>
                <li>Participants in a team should represent the same University or the Higher Educational Institute.</li>
                <li>The proposed idea cannot be changed during the competition. Selections will be conducted in 2 stages;</li>
            </ParaText>
            <div className="btn-container">
                <img src="Assests/Group 145.png" className="Group_145"  data-aos="fade-up"/>
                <Button className="btn-primary2 btn2" href="/TechnicalSpecification" target="">TECHNICAL SPECIFICATIONS</Button>
            </div>
        
        </div>
        

        <div>
            <HeadingText>COMPETITION FORMAT</HeadingText>
            <HeadingText2 style={{textAlign:"left"}}>I.MATCH TYPE (FRIST ROUND MATCH)</HeadingText2>
            <img src="Assests/Group 146.png" className="Group_146"/>
        </div>
        

        <div>
            <HeadingText2 style={{textAlign:"left"}}>II.MATCH TYPE (SECOND ROUND MATCH))</HeadingText2>
            <img src="Assests/Group 147.svg" className="Group_147"/>
        </div>
        

        <div>
            <HeadingText>MATCH TIME LIMITS</HeadingText>
            <ParaText>1st Round - 3 minutes fight From the semifinals onwards there will be 2 rounds each for a battle. Note: Time limits and base rules may be changed subject to Judges’ decisions.</ParaText>
        </div>
        

        <div>
            <HeadingText>MATCH FREQUENCY</HeadingText>
            <ParaText>It is recommended that any routine maintenance should take no longer than 20 minutes (especially battery charging and/or replacement). Teams who are not prepared to compete after this period may be forced to forfeit. Initial round competing opponents will be selected randomly. Objections over the selected contender will not be entertained</ParaText>
        </div>
        

        <div>
            <HeadingText>POWER OF OFFICIAL</HeadingText>
            <ParaText>Entrants must follow the verbal instructions of “SUSL Robot Battles 2K23” officials at all the times. This is necessary to maintain the safety of the audience and participants. Circumstances beyond the scope of the rules and guidelines shall be up to judges’ decisions and would be final.</ParaText>
        </div>
        

        <div>
            <HeadingText>JUDGING OF MATCHES</HeadingText>
            <ParaText>“SUSL Robot Battles 2K23” Duel matches will be the two robots on the specified starting points of the arena. At the start the robots should be placed with in the starting square. Any part of the robot / multi robot should not exceed the starting square (of the maximum allowable dimensions). The robots must be motionless with all rotary and other type of weapons switched off. After the official start, robots should exhibit motion on a regular basis so that they are not declared “incapacitated”.</ParaText>        
        </div>

        <div>
            <HeadingText id="prizes">PRIZES</HeadingText>
            <div>
                <Row>
                    <Col>
                        <div className="image">
                            <img src="Assests/222.png" className="J222"/>
                        </div>
                        <div className="content">
                            <p className="prize">30,000 LKR</p>
                            <p className="place">1ST RUNNERS UP</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="image">
                            <img src="Assests/111.png" className="J111"/>
                        </div> 
                        <div className="content">
                            <p  className="prize">100,000 LKR</p>
                            <p  className="place">WINNER</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="image">
                            <img src="Assests/333.png" className="J222"/>
                        </div>
                        <div className="content">
                            <p className="prize">70,000 LKR</p>
                            <p className="place">2ND RUNNERS UP</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="image">
                            <img src="Assests/1.png" className="J1"/>
                        </div>
                        <div className="content">
                            <p className="prize">20,000 LKR</p>
                            <p className="place">BEST MECHANISM</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="image">
                            <img src="Assests/2.png" className="J1"/>
                        </div>
                        <div className="content">
                            <p className="prize">20,000 LKR</p>
                            <p className="place">MOST POPULAR TEAM</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        

        <div>    
            <HeadingText id="sponsors">SPONSORS</HeadingText>

            <Container>
                <div className="flex-container2">
                    <Row>
                        <Col className="sponsor-box">
                            <img src="./Assests/ICSUSL logo.png" alt="" className="spons-logo"/>
                        </Col>
                        <Col className="sponsor-box">
                            
                        </Col>
                        <Col className="sponsor-box">
                            
                        </Col>
                        <Col className="sponsor-box">
                            
                        </Col>
                        
                    </Row>

                    <Row className="spons-apply">
                        <Col className="spons-apply-text">
                            <p className="spons-apply" >If you are interested in providing sponsorship for our project, you can apply it from here.</p>
                        </Col>
                        <Col className="spons-apply-btn">
                            <Button className="btn btn-primary" href="https://forms.gle/CMexeNrHgwdW2UGy8">Apply</Button>
                        </Col>
                    </Row>

                    
                    
                        
                </div>
            </Container>
        </div>
        
            
        
    </Container>
  )

}




export default Main;


