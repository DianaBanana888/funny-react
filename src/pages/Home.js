import React, { useState } from 'react'
// const unirest = require('unirest');

const request = require('request');

export default function Home() {
  const [meme, setMeme] = useState('');
  // attempt #0
  // const req = unirest("GET", "https://ronreiter-meme-generator.p.rapidapi.com/meme");

  // req.query({
  //   "meme": "Developer",
  //   "bottom": "I am a developer!",
  //   "top": "hello, honey,",
  //   "font_size": "50",
  //   "font": "Impact"
  // });

  // req.headers({
  //   "x-rapidapi-key": "4e5a35a4b1mshf5b63a44736fa7ep1acba8jsnfa1d45389e90",
  //   "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com",
  //   "useQueryString": true
  // });

  // const onClickMemeHandler = () => {
  //   req.end(function (res) {
  //     if (res.error) throw new Error(res.error);

  //     console.log(res.body);
  //   });
  // }
  // attempt #1
  // let options = {
  //   url: 'https://api.imgflip.com/get_memes',
  //   method: 'GET'
  // }
  // const onClickMemeHandler = () => {
  //   request(options, (err, response, body) => {
  //     if (!err && response.statusCode === 200) {
  //       let randomNumber = Math.floor(Math.random() * 100);
  //       let a = JSON.parse(body)["data"]["memes"][randomNumber]["url"];
  //       console.log(a)
  //       setMeme(a)
  //     }
  //   });
  // }
  // attempt #2

  const data = {
    "username": "DianaErokhina",
    "password": "QMBdhXvNrE34!ya",
    "template_id": "181913649",
    "text0": "abc",
    "text1": "asgdf"
  }

  const formData = new FormData();

  formData.append('username', 'DianaErokhina');
  formData.append("password", "QMBdhXvNrE34!ya");
  formData.append("template_id", "181913649");
  formData.append("text0", "abc");
  formData.append("text1", "asgdf");

  const onClickMemeHandler = async () => {

    const response = await fetch('https://api.imgflip.com/caption_image', {
      method: 'POST',
      // mode: 'no-cors', // no-cors, *cors, same-origin
      // headers: {
      //   'Content-Type': 'application/json'
      // },
      body: formData
    });
    if (response) {
      const result = await response.json();
      console.log(`result`, result)
    } else console.log(`sorry`)
  }
  return (
    <div>
      <button
        className='button-new-joke'
        onClick={() => onClickMemeHandler()}
      >
        New Meme, please!
          </button>
      <br />
      <img src={meme} alt="meme" />
    </div>
  )
}
