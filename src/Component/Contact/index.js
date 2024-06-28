import React, { Component } from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Header from '../Header'
import './index.css'

class Contact extends Component {

  state = {
    name: '',
    email: '',
    phoneNumbre: '',
    message: ''
  }

  onChangeName = event => {
    this.setState({name : event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhoneNumber = event => {
    this.setState({phoneNumbre: event.target.value})
  }
  
  onChangeMessage = event => {
    this.setState({message: event.target.value})
  }

  onSubmitContact = () => {

  }

  render() {
    const { name, email, phoneNumbre, message } = this.state
    console.log(name)
    return (
      <>
        <Header />
        <div className='Main-Container-Contact'>
        <div className='Contact-Container-image'>
          <div className="contact-us">
            <h1 className="contact-us-heading">CONATACT US</h1>
            <p className="contact-para">Feel Free to Reach</p>
          </div>
          <ul className="contact-list-element">
            <li>
              <FaPhoneSquareAlt />
              <p>+91 93605 57621</p>
            </li>
            <li>
              <CiMail />
              <p>srtconstr@gmail.com</p>
            </li>

          </ul>
        </div>
        <div className="Contact-input-container">
          <h1>INQUIRE WITH US</h1>
          <form onSubmit={this.onSubmitContact} className="inputForm">
   
              <input
              className='contact_input'
              placeholder='NAME'
              value={name}
              onChange={this.onChangeName}
            />
             <input
              className='contact_input'
              placeholder='EMAIL'
              value={email}
              onChange={this.onChangeEmail}
            />
             <input
              className='contact_input'
              placeholder='PHONE NUMBER'
              value={phoneNumbre}
              onChange={this.onChangePhoneNumber}
            /> 
            <textarea rows="4" cols="50"   placeholder="MESSAGE"
                onChange={this.onChangeMessage}></textarea>
              
              <button type='button' className='btn-contact'>SUBMIT</button>
    
          </form>
          </div>
          </div>
      </>
    )
  }
}

export default Contact

