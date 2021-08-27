import React, {Component} from 'react'
import './About.css'

class About extends Component {
  render() {
    return (
      <div id="about" className="about">
        <div class="greeting">
          <h1>Hi there! Thanks for checking out my website.</h1>
          <p><b>I'm a motivated 22-year-old programmer with a strong foundation in software
          engineering methodologies and an interest in expanding my knowledge base.</b></p>
          <p>I graduated from the Ohio State University in 2021 with degree in computer science,
          but programming has been a passion of mine
          ever since I was a kid, and it's extraordinary to me that I have the
          opportunity to turn that passion into my life's work. There's something
          truly remarkable about being able to transform code on a computer
          into a real creation that can improve people's lives.</p>
          <p>Currently I'm employed as an engineer at <a href="https://www.8451.com/">84.51°</a>,
          where I help build software that creates data insights in the grocery space
          for a Fortune 23 company.</p>
        </div>
      </div>
    )
  }
}

export default About
