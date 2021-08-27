import React, {Component} from 'react'
import './Projects.css'

class Projects extends Component {
  render() {
    return (
      <div id="projects" className="projects">
        <h1>Some projects I enjoyed:</h1>
        <div className="projects-container">
          <div className="project">
            <h2>Personal Website</h2>
            <p>I revamped my personal website to help refamiliarize myself with CSS
            and decrease my reliance on premade UI frameworks, as well as to try out
            GitHub Pages as a hosting option for the first time.</p>
            <p><b>CSS, HTML, Javascript (JSX), React</b></p>
            <p className="date"><i>Fall 2021</i></p>
          </div>
          <div className="project">
            <h2>Project Limb Rescue App</h2>
            <p>As part of a team of engineers, I collaborated closely with a cardiologist
            at the OSU Wexner Medical Center to develop an Android WearOS app to help
            detect early signs of lymphedema, a side effect to cancer treatment.</p>
            <p><b>Android, Java, RoomDB, WearOS</b></p>
            <p className="date"><i>Spring 2021</i></p>
          </div>
        </div>
        <div className="projects-container">
        <div className="project">
          <h2>System Call Malware Detection</h2>
          <p>I created a project in C and Java to extract Linux system calls from
          a process and determine its likelihood of being certain kinds of malware.
          This was done by training a K-Nearest-Neighbors algorithm on data from
          known malware, and the model resulted in a 93% detection accuracy.</p>
          <p><b>C, Java, Java-ML</b></p>
          <p className="date"><i>Spring 2020</i></p>
        </div>
          <div className="project">
            <h2>Kernel Module Syscall Hijacking</h2>
            <p>As part of an exploration of how a computer operating system works,
            I created a kernel module in C that hijacks a number of Linux system calls
            in order to support a theoretically-malicious process. The hijacked
            calls listen for a secret key sent by the process and, once received, are
            able to prevent the process from being terminated and any files indicated by it
            from being moved, copied, opened, or deleted.</p>
            <p><b>C</b></p>
            <p className="date"><i>Spring 2020</i></p>
          </div>
        </div>
        <div className="projects-container">
          <div className="project">
            <h2>Class Scheduling Web App</h2>
            <p>In this project, my first proper exposure to full-stack web development,
            I was part of a team to design a fully-featured web app and database for
            class scheduling and TA assignment.</p>
            <p><b>PostgreSQL, Ruby on Rails</b></p>
            <p className="date"><i>Spring 2020</i></p>
          </div>
          <div className="project">
            <h2>2018 FEH Honors Robot Competition</h2>
            <p>I led and developed code for a team of first-year engineering students
            as we created a robot capable of completing tasks in a series of head-to-head
            competitions. Our robot was awarded a first-place monetary prize for its
            unique design, being made almost entirely from wood.</p>
            <p><b>C++</b></p>
            <p className="date"><i>Spring 2018</i></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
