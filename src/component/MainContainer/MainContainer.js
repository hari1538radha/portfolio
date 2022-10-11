import React from 'react'
import "./Maincontainer.css"
import LeftContainer from '../LeftContainer/LeftContainer'
import RightContainer from '../RightContainer/RightContainer'
const MainContainer = () => {
  return (
    <div className='main-container'>
        <LeftContainer/>
        <RightContainer/>
    </div>
  )
}

export default MainContainer