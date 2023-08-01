import React from 'react'
import amazon from './images/amazon.png'
import flipkart from './images/flipkart.png'

function LeftContainer() {
  return (
    <div id="leftContainer">
      <h1 id="bigtext">Your feet deserve the best</h1>
      <p className='p-tag'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      <div id="button-box">
        <button id='btn1'>Shopnow</button>
        <button id='btn2'>Category</button>
      </div>
      <div id="text-image">
        <p id="oneline">Also Available On</p>
        <div id="image-box">
          <img src={amazon} alt="" id="img1" />
          <img src={flipkart} alt="" id="img2" />
        </div>
      </div>
    </div>
  )
}

export default LeftContainer