import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import request from 'request';

export default function Main() {
  const [joke, setJoke] = useState('');

  const options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET',
  };
  const onClickHandler = () => {
    request(options, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        setJoke(body);
      } else {
        setJoke('Geek-jokes are exhausted of trying to make you laugh, try later');
      }
    });
  };

  return (
    <div>
      <br />
      <Button
        size="lg"
        variant="danger"
        className="button-new-joke"
        onClick={() => onClickHandler()}
      >
        Geek-Joke, please!
      </Button>

      <div className="text-joke">{joke}</div>
    </div>
  );
}
