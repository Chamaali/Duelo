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

                    <p style={{marginTop:"20px"}} className='footer-para'>ORGANIZED BY IEEE STUDENT BRANCH OF SABARAGAMUWA UNIVERSITY OF SRI LANKA</p>

                    <p style={{fontWeight:"Bold"}} className='footer-contact'>CONTACT US</p>

                    
                        <div className='icon-set'>

                            <a href="https://www.facebook.com/profile.php?id=61550015638171&mibextid=ZbWKwL" target='blank' rel='noreferrer'><img src='Assests/Icon awesome-facebook-square.svg' style={{margin:"10px"}} className='footer-icon'></img></a>
                            <a href="https://www.linkedin.com/company/ieee-student-branch-of-susl/" target='blank' rel='noreferrer'><img src='Assests/Icon awesome-linkedin.svg'style={{margin:"10px"}} className='footer-icon'></img></a>
                            <a href="https://instagram.com/ieeesuslsb?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D" target='blank' rel='noreferrer'><img src='Assests/Icon simple-instagram.svg'style={{margin:"10px"}} className='footer-icon'></img></a>
                            
                       
                            
                        
                            
                        </div>
                   
                
                </Container>
            
            </div>
        </div>




    
    )
}

export default Footer
