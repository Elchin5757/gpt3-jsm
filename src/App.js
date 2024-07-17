import React from 'react'

import { Header, Footer, Features, Blog, WhatGPT3, Possibility } from "./containers"
import { CTA, Brand, Navbar } from "./component"
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer /> 
    </div>
  )
}

export default App