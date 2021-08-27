import React, {Component} from 'react'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <p class="terminalText"><a href="#about" class="folder">About</a> &nbsp; <a href="#timeline" class="folder">Timeline</a> &nbsp; <a href="#projects" class="folder">Projects</a> &nbsp; <a href="#contact" class="folder">Contact</a></p>
        <div className="name">
          $ <div className="nameAnimated"/><div className="lastName">Swartz</div>
        </div>
        <p class="subtitle">software engineer - <a href="https://github.com/kate-swartz/">github</a></p>
      </div>
    )
  }
}

export default Navbar
