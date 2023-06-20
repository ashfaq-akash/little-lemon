import React from 'react'
import Header from './Header'
import Main from './Main'
import CustomerSay from './CustomerSay'
import Specials from './Specials'
import Chicago from './Chicago'
import Footer from './Footer'

function Home() {
  return (
    <div id='home-section'>
      <Header />
      <Main />
      <Specials />
      <CustomerSay />
      <Chicago />
      <Footer />
    </div>
  )
}

export default Home
