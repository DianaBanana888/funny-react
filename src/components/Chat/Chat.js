import React, { useState } from 'react'

export default function Chat() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [messages, setMessages] = useState([{
    "user": "",
    "text": ""
  }]);
  const [switcher, setSwitcher] = useState(false);
  let counter = 0;

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

  const onClickSubmitHandler = () => {
    if (textAreaValue.length > 0) {

      if (counter === 5) {
        setSwitcher(true)
      } else { counter++ };

      console.log(`counter`, counter)
      //Jan; Maybe call user -> displayClass...
      const userMsg = {
        "user": "user",
        "text": textAreaValue
      };
      setMessages([...messages, userMsg])
      setTextAreaValue("")
      setTimeout(function () {
        const systemMsg = {
          "user": "system",
          "text": fake[Math.floor(Math.random() * fake.length)]
        };
        setMessages([...messages, systemMsg])
      }, 5000);
    } else {
      alert("You didn't write any message yet")
    }
  };


  return (
    <div>

      <div className="messages">
        <p className="system-msg">Hello, tell us about your problem.</p>
        {messages.map(message => <p className={message.user}>{message.text}</p>)}
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
        <button className="message-submit" onClick={() => onClickSubmitHandler()}>Send</button>

        {switcher
          ? <div className="hidden-info">
            It seems like our team cannot help you. But you can contact Sameer Kumar and tell your opinion!
          <a href="https://github.com/sameerkumar18/geek-joke-api">Link to Sameer's github</a>
          </div>
          : <div />
        }

      </div>

    </div >
  )
}
