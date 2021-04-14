import React, { useState } from 'react'
const request = require('request');

export default function Main() {
  const [joke, setJoke] = useState('');
  let options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET'
  }
  const onClickHandler = () => {
    request(options, (err, response, body) => {
      if (!err && response.statusCode === 200)
        console.log(body)
      setJoke(body)
    });
  }

  return (
    <div>
      <button
        className='button-new-joke'
        onClick={() => onClickHandler()}
      >
        Geek-Joke, please!
          </button>
      <div className="text-joke">{joke}</div>
    </div>
  )
}
