import React, {Component} from 'react'
import WebsiteHeader from './WebsiteHeader.js'
import Navbar from './Navbar.js'
import About from './About.js'
import Contact from './Contact.js'
import Timeline from './Timeline.js'
import Projects from './Projects.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
        <WebsiteHeader/>
        <Navbar/>
        <About/>
        <Timeline/>
        <Projects/>
        <Contact/>
      </div>
    )
  }
}

export default App
