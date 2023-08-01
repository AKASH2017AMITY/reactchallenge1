import React from 'react'
import "./container.css"
import RightContainer from './RightContainer'
import LeftContainer from './LeftContainer'

function Container() {
  return (
    <main id="container">
    <LeftContainer />
    <RightContainer />
    </main>
  )
}

export default Container