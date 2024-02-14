import React from 'react'
import ResponsiveAppBar from './Navbar'
import "./App.css"
import BelowNavBar from './BelowNavBar'
import Banner from './Banner'
import SwipeableTextMobileStepper from './Carausel'
const App = () => {
  return (
    <>
      <ResponsiveAppBar/>
      <BelowNavBar/>
      <Banner/>
      <SwipeableTextMobileStepper/>
    </>
  )
}

export default App