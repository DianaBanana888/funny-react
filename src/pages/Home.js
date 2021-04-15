import React, { useState } from 'react';
import request from 'request';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function Home() {
  const [meme, setMeme] = useState('');

  const options = {
    url: 'https://api.imgflip.com/get_memes',
    method: 'GET',
  };

  async function onClickMemeHandler(templateId) {
    const formData = new FormData();
    formData.append('username', process.env.REACT_APP_MEME_USERNAME);
    formData.append('password', process.env.REACT_APP_MEME_PASSWORD);
    formData.append('template_id', templateId);
    formData.append('text0', 'There are 10 types of people in the world');
    formData.append('text1', 'those who understand binary, and those who don’t');

    const response = await fetch('https://api.imgflip.com/caption_image', {
      method: 'POST',
      body: formData,
    });
    if (response) {
      const result = await response.json();
      setMeme(result.data.url);
      // eslint-disable-next-line no-console
    } else console.log('sorry, there is an error with POST meme');
  }

  const onClickMemeIDHandler = () => {
    request(options, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        const randomNumber = Math.floor(Math.random() * 100);
        const templateId = JSON.parse(body).data.memes[randomNumber].id;
        onClickMemeHandler(templateId);
      }
    });
  };

  return (
    <div>
      <Button
        variant="success"
        className="button-new-joke"
        onClick={() => onClickMemeIDHandler()}
      >
        New Meme, please!
      </Button>
      {' '}

      <br />
      <br />
      <Image src={meme} alt="meme" />
    </div>
  );
}
