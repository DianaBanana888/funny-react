import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function Chat() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [switcher, setSwitcher] = useState(false);

  const onChangeHandler = (e) => {
    setTextAreaValue(e.target.value);
  };

  const fake = [
    'Hi there, I\'m Jesse and you?',
    'Nice to meet you',
    'How are you?',
    'Not too bad, thanks',
    'What do you do?',
    'That\'s awesome',
    'Codepen is a nice place to stay',
    'I think you\'re a nice person',
    'Why do you think that?',
    'Can you explain?',
    'Anyway I\'ve gotta go now',
    'It was a pleasure chat with you',
    'Time to make a new codepen',
    'Bye',
    ':)'
  ]

  const onClickSubmitHandler = async () => {
    if (textAreaValue.length > 0) {

      if (messages.length >= 3) setSwitcher(true)

      const userMsg = {
        "user": "user",
        "text": textAreaValue,
        "key": new Date().toISOString()
      };
      setTextAreaValue("")
      setMessages(messages => [...messages, userMsg])

      setTimeoutForAnswer();
    } else {
      alert("You didn't write any message yet")
    }
  };

  function setTimeoutForAnswer() {
    setTimeout(function () {
      const systemMsg = {
        "user": "system",
        "text": fake[Math.floor(Math.random() * fake.length)],
        "key": new Date().toISOString()
      };
      setMessages(messages => [...messages, systemMsg])
    }, 4000);

  }


  return (
    <div>

      <div className="messages">
        <div class="frame-outer">
          <div class="frame-inner">
            <p className="system"><span>Hello, tell us about your problem.</span></p>
            {messages.map(message => <p key={message.key} className={message.user}>
              <span>{message.text}</span></p>)}
          </div>
        </div>
      </div>

      <div className="message-box">
        <textarea
          type="text"
          className="message-input"
          name='textAreaValue'
          placeholder="Type message..."
          value={textAreaValue}
          onChange={onChangeHandler}
        ></textarea>
        <br />
        <Button
          size="lg"
          variant="info"
          className="message-submit"
          onClick={() => onClickSubmitHandler()}
        >Send</Button>
      </div>

      {switcher
        ? <div className="hidden-info">
          It seems like our team cannot help you. But you can contact Sameer Kumar and tell your opinion!
          <a href="https://github.com/sameerkumar18/geek-joke-api">Link to Sameer's github</a>
        </div>
        : <div />
      }

    </div >
  )
}
