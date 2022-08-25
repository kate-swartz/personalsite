import React, {Component} from 'react'
import './Timeline.css'

class Timeline extends Component {
  render() {
    return (
      <div id="timeline" className="timeline">
        <div class="container right">
          <div class="content">
            <h2>August 2022 — Present</h2>
            <p><b>Georgia Tech OMSCS</b></p>
            <p>In fall of 2022 I enrolled as a student in the Online Master
            of Science in Computer Science program at the Georgia Institute
            of Technology, hoping to expand my foundational understanding of
            computer science at a graduate level.</p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>June 2021 — Present</h2>
            <p><b>Software Engineer at 84.51°</b></p>
            <p>At 84.51°, I build backend services in Java and Python that
            deliver marketing campaigns to Kroger and its third-party vendors,
            allowing for a seamless experience when designing and approving
            creatives such as web advertisements, email campaigns, and coupons.</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>April 2021</h2>
            <p><b>Bachelor's of Science in Computer Science & Engineering</b></p>
            <p>I graduated <i>cum laude</i> from the <b>Ohio State College of Engineering</b> with
            a B.S. in Computer Science & Engineering and minor in Business.
            I achieved an overall GPA of 3.531 and was recognized on the college's
            Dean's List for three years in a row.</p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h2>June — August 2020</h2>
            <p><b>SULI Intern at Brookhaven National Laboratory</b></p>
            <p>At BNL, I participated in a unique undergraduate research opportunity,
            working one-on-one with an expert mentor to enhance a state-of-the-art
            digital repository web application using React and Semantic UI.</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h2>May-August 2019</h2>
            <p><b>Software Developer Intern at The Kroger Company</b></p>
            <p>At Kroger, I learned to navigate large enterprise applications as
            I worked with an agile development team to add features to some critical
            web applications related to store monitoring and capital appropriations.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Timeline
