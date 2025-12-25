import React from 'react'
import "./styles/App.css"
import Snow from './components/Snow'
import Clouds from './components/Clouds'
import Santa from './components/Santa'
import Hero from './components/Hero'
import Tree from './components/Tree'
import Tree2 from './components/Tree2'
import ChristmasAccessories from './components/ChristmasAccessories'
import SurpriseGift from './components/SurpriseGift'
import Gifts from './components/Gifts'

const App = () => {
  return (
    <>
        <section className="page page-one">
      <Snow/>
      <Santa/>
      <Clouds/>
      <Tree/>
      <Hero/>   
      </section>
        <section className="page page-two">
          <div className="gift-center">
  <SurpriseGift fortune="🎄 Joy & happiness await you!" />
  <SurpriseGift fortune="✨ Success is coming your way!" />
  <SurpriseGift fortune="🎁 A surprise will find you soon!" />
  <SurpriseGift fortune="❄️ Peace & love this season!" />
</div>

      <Clouds/>
      <Tree2/>
      <ChristmasAccessories/>
      <Gifts/>
      </section>
    </>
  )
}

export default App