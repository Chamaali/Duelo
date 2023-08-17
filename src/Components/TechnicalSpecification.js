import React from 'react'
import { Container } from 'react-bootstrap'
import HeadingText from './HeadingText'
import HeadingText2 from './HeadingText2'
import "./images.css"
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

function TechnicalSpecification ()  {

    useEffect ( () =>{
        AOS.init({
            duration: 3000
        });
    }, []);
  return (
    <div style={{ backgroundColor:"#111111"}} className='technical'>
        <Container>
        <HeadingText>TECHNICAL SPECIFICATIONS</HeadingText>
        <HeadingText2>I.ROBOT SPECIFICATIONS</HeadingText2>
        <div data-aos="fade-up">
            <ul>

                <li className='sub-paragraph'>The dimensions of the robot must be within the maximum allowable dimensions of 45cm x 45cm (length x width) and the allowed maximum weight of 10kg.</li> 
                
                <li className='sub-paragraph'>Once started, the robot can expand itself up to a limit of 60cm in any direction if necessary, provided it does not damage the arena in anyway.</li> 
                
                <li className='sub-paragraph'>The robot’s power supply must be internal (no external power is allowed) and maximum Voltage between any pair of points inside the robot cannot exceed 24V at any time. No internal combustion engines will be allowed. All power sources must be 100% safely contained in the robot and packaged appropriately for the expected abuse.</li> 
                
                <li className='sub-paragraph'>The robot can split into maximum of 2 completely disjoint and controllable units. However, at the start the robots must be in a single unit.</li> 
                
                <li className='sub-paragraph'>The robot should have a clearly indicated START/STOP switch. All robots with active weapons must have a Master Kill Switch that deactivates the weapon immediately, or be designed to cease operation when radio signal is lost or tether is cut. This is for the safety of the audience and the other competitors.</li> 
                
                <li className='sub-paragraph'>Once the robot is switched on it should be able to be controlled by the participants.</li> 
                
                <li className='sub-paragraph'>No robot may, under any circumstance, present a hazard to the judges, spectators, or the opposing operator(s). No robot may in its operation cause damage to anything other than the opposing robot.</li> 
                
                <li className='sub-paragraph'>Any vehicle that impairs the viewing areas will be ruled ineligible for the competition.</li> 
                
                <li className='sub-paragraph'>All robots will be subject to a technical inspection prior to combat.</li> 
                
                <li className='sub-paragraph'>Failure to disclose any operating principle will be grounds for immediate disqualification. Judges may restrict any function deemed excessively hazardous.</li> 
                
                <li className='sub-paragraph'>Liquids may not be used in combat situations. If any substance coming from a robot that, in the opinion of the judges, cannot be completely cleaned up after combat, the robot will then be declared ineligible. </li>
                
                <li className='sub-paragraph'>Radio controlled robots should be able to operate in a way to avoid radio frequency conflicts or have a digital transmitter capable of non-conflicting frequencies (or an R/C tether combination). </li>
                
                <li className='sub-paragraph'>All entries must confirm to the general rules of the facility and the event.</li>
            </ul>
        </div>
        <HeadingText2>II.COMBAT</HeadingText2>
        <div  data-aos="fade-up">
            <ul>
                <li className='sub-paragraph'>The combat volume is defined as the combat surface and the airspace above it to the height of whatever ceiling is present.</li> 
                
                <li className='sub-paragraph'>Leaving the combat volume entirely is prohibited. Major portions of the robot may leave the combat volume provided that some part of the robot remains inside. You will immediately be declared defeated if your robot has entirely left the combat volume, or has come in contact with any restricted surface.</li> 
                
                <li className='sub-paragraph'>No contact with the ceiling is permitted.</li> 
                
                <li className='sub-paragraph'>No part of any operator’s body may impinge on the combat volume during combat.</li> 
                
                <li className='sub-paragraph'>The use of projectile weapons is not allowed due to issues of audience safety.</li> 
                
                <li className='sub-paragraph'>The use of “entanglement” devices are not allowed.</li> 
                
                <li className='sub-paragraph'>No flammable fuels, liquid, gaseous or solid may be used in combat situations.</li> 
                
                <li className='sub-paragraph'>Jamming your opponent’s controller, either electronically or physically, is prohibited. Any robot with EMP capabilities will be disqualified from competition.</li> 
                
                <li className='sub-paragraph'>The same robot needs to be used in all the rounds, hence consider having sufficient spare parts.</li> 
                
                <li className='sub-paragraph'>If flying robots are being used, there needs to be a terrestrial one as well. If the terrestrial one is pushed into the pit or out of the arena by the opponent, it will be considered as a defeat. </li>
                
                <li className='sub-paragraph'>There is a 3-minute time limit for each combat round. If neither robot has achieved a victory condition within the time limit, the winner will be decided by the judgers.</li>
            </ul>
        </div>
        <HeadingText2>III.WEAPON TYPES</HeadingText2>
        <div  data-aos="fade-up">
            <p  className='sub-paragraph'>Forbidden Weapons, The following weapons may not be used:</p>
            <ol>
                <li className='sub-topics'>Electricity<span className='paragraph'> - The use of electricity as a weapon shall be forbidden. This includes, but is not limited to the following:</span></li>
                <ul>
                    <li className='sub-paragraph'>Stun Guns/Cattle Prods</li>
                    <li className='sub-paragraph'>RF jamming equipment, etc. </li>
                    <li className='sub-paragraph'>EMP bursts</li>
                </ul>
                <li className='sub-topics'>Liquids<span className='paragraph'> - The use of any liquid as a weapon shall be forbidden. This includes, but is not limited to the following:</span></li>
                <ul>
                    <li className='sub-paragraph'>Water and other liquids </li>
                    <li className='sub-paragraph'>Liquefied gasses</li>
                    <li className='sub-paragraph'>Foams, Adhesives, etc.</li>
                </ul>
                <li className='sub-topics'>Explosives or Flammable Solids<span className='paragraph'> - This includes, but is not limited to the following:</span></li>
                <ul>
                    <li className='sub-paragraph'>DOT Class C devices</li>
                    <li className='sub-paragraph'>Gunpowder/ Cartridge Primers</li>
                    <li className='sub-paragraph'>Military Explosives, etc.</li>
                </ul>
                <li className='sub-topics'>Lights<span className='paragraph'> - Lights that are bright enough to obstruct an Official, Entrant, or Judge’s vision shall be forbidden. This includes, but is not limited to the following:</span></li>
                <ul>
                    <li className='sub-paragraph'>Lights/ lasers directed at the Entrants, etc.</li>
                </ul>
                <li className='sub-topics'>Projectiles<span className='paragraph'> - Untethered projectiles are forbidden. Tethered projectiles are allowed. Tethered projectiles can carry a tremendous amount of energy, the restraints must be strong enough to absorb this energy, and the restraints must be strong enough to absorb this energy without sustaining any damage. The length of the tether as measured from the body of the robot to the tip of the projectile must be less than 2 feet. Entrant may be disqualified for intentionally using a tether as an entanglement device.</span></li>
                <li className='sub-topics'>Heat<span className='paragraph'> - Heat specifically generated to damage an opponent is forbidden.</span></li>
                <li className='sub-topics'>Entanglement Devices<span className='paragraph'> - Any device specifically designed to entangle another robot shall be forbidden. This includes but is not limited to the following:</span></li>
                <ul>
                    <li className='sub-paragraph'>Any type of net.</li>
                    <li className='sub-paragraph'>Fishing Line, String, etc.</li>
                    <li className='sub-paragraph'>Tape</li>
                </ul>
                
            </ol>
        </div>
        <HeadingText2>IV.TECHNICAL / SAFETY INSPECTION</HeadingText2>
        <div  data-aos="fade-up">
            <p className='sub-paragraph'>To be eligible to compete in “SUSL Robot Battles 2K23” entrants must pass a technical / safety inspection. The points covered at the technical / safety inspection shall include (not limited to): </p>
            <p className='sub-paragraph'>Eligibility - compliance with “SUSL Robot Battles 2K23” Competition Rules & Guidelines.</p>
            <ul>
                <li className='sub-paragraph'>Weight and size check. </li>
                <li className='sub-paragraph'>Appearance suitable for competition. </li>
                <li className='sub-paragraph'>There shall be no fluid / gas leaks. </li>
                <li className='sub-paragraph'>Confirmation of hydraulic / pneumatic component ratings.</li>
                <li className='sub-paragraph'>Adequate sharp edge covers. </li>
                <li className='sub-paragraph'>Functionality test - A functionality test is used to prove that a robot is capable of reasonably safe control. A simple “driving” test may be set up as part of the technical / safely inspection. </li>
            </ul>
            <p className='sub-paragraph red'>The organizers will not be responsible for any damages, that may occur during the competition.</p>
        </div>
    </Container>
    </div>
    
  )
}

export default TechnicalSpecification