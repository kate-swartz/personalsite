import React, {Component} from 'react'
import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact">
        <div className="contact-box">
          <h1>Contact Me</h1>
          <div id="contact-form" class="form">
            <form action="https://formspree.io/f/xdoypqvy" method="POST">
              <input type="hidden" name="_subject" value="Contact request from kate-swartz.com" />
              <p>Email: *</p>
              <input type="email" name="_replyto" placeholder="Your email..." required />
              <p>Message: *</p>
              <textarea name="message" placeholder="Type your message..." required></textarea>
              <br/>
              <button type="submit">Send</button>
            </form>
        </div>
      </div>
      </div>
    )
  }
}

export default Contact
