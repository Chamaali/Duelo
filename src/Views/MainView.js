import React from 'react'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import NavigationBar from '../Components/NavigationBar'
import TechnicalSpecification from '../Components/TechnicalSpecification'

const MainView = () => {
  return (
    <div style={{ backgroundColor:"#111111"}}>
        <NavigationBar />
        <Main/>
        <Footer/>
    </div>
  )
}

export default MainView