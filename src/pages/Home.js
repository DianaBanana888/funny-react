import React, { useState } from 'react';
import env from "react-dotenv";
import request from 'request';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function Home() {
  const [meme, setMeme] = useState('');

  let options = {
    url: 'https://api.imgflip.com/get_memes',
    method: 'GET'
  }
  const onClickMemeIDHandler = () => {
    request(options, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        let randomNumber = Math.floor(Math.random() * 100);
        let templateId = JSON.parse(body)["data"]["memes"][randomNumber]["id"];
        onClickMemeHandler(templateId);
      }
    });
  }

  async function onClickMemeHandler(templateId) {

    const formData = new FormData();
    formData.append('username', env.MEME_USERNAME);
    formData.append("password", env.PASSWORD);
    formData.append("template_id", templateId);
    formData.append("text0", "There are 10 types of people in the world");
    formData.append("text1", "those who understand binary, and those who don’t");

    const response = await fetch('https://api.imgflip.com/caption_image', {
      method: 'POST',
      body: formData
    });
    if (response) {
      const result = await response.json();
      setMeme(result.data.url)
    } else console.log(`sorry, there is an error with POST meme`)
  }

  return (
    <div>
      <Button
        variant="success"
        className='button-new-joke'
        onClick={() => onClickMemeIDHandler()}
      >New Meme, please!</Button>{' '}

      <br />
      <br />
      <Image src={meme} alt="meme" />
    </div>
  )
}
