import React from 'react'
import { Container } from 'react-bootstrap'
import './images.css';

const Footer = () => {
    return (
    
        <div className='footer-box'>
            <div className='footer-text'>   
                <Container>
                
                    <div>
                        <img className='out' src='Assests/Group 139.png'></img>
                    </div>

                    <p style={{marginTop:"20px"}}>ORGANIZED BY IEEE STUDENT BRANCH OF SABARAGAMUWA UNIVERSITY OF SRI LANKA</p>

                    <p style={{fontWeight:"Bold"}}>CONTACT US</p>

                    
                        <div>
                            <img src='Assests/Icon awesome-facebook-square.svg' style={{margin:"10px"}}></img>
                       
                            <img src='Assests/Icon awesome-linkedin.svg'style={{margin:"10px"}}></img>
                        
                            <img src='Assests/Icon simple-instagram.svg'style={{margin:"10px"}}></img>
                        </div>
                   
                
                </Container>
            
            </div>
        </div>




    
    )
}

export default Footer
