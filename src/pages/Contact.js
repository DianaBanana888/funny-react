import React, { useState } from 'react';
import Popup from '../components/Popup';
import Button from 'react-bootstrap/Button'

export default function Contact() {
  const [classStatus, setClassStatus] = useState('popup-hidden');

  const onClickHandler = () => {
    setClassStatus('popup-visible');
  }

  return (
    <div>
      <br />
      Are you offended or think there are too many Chuck Norris jokes in Geek jokes? Feel free to contact and tell us about your feelings!
      <br />
      <Button
        variant="info"
        onClick={onClickHandler}
        className="contact-us"
      >
        Contact us
      </Button>

      {/* <button onClick={onClickHandler} className="contact-us">Contact us</button> */}
      <div className={classStatus}>
        <Popup />
      </div>
    </div>
  )
}
