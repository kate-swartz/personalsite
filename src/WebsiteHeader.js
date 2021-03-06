import React, {Component} from 'react'
import Navbar from './Navbar.js'
import './WebsiteHeader.css'

class About extends Component {
  render() {
    return (
      <div id="website-header" className="website-header">
        <div className="terminalText">
          <p>My Website [Version 1.0.0]</p>
          <p>(c) Kate Swartz 2021. Built with React and hosted on GitHub Pages.</p>
          <p>$ ls</p>
        </div>
        {/* Normally <Navbar/> would go here, but we need it to be sticky across the whole page */}
      </div>
    )
  }
}

export default About
