import React, { useState } from 'react'
import request from 'request';

export default function Home() {
  const [meme, setMeme] = useState('');
  const [memeID, setMemeID] = useState('');

  let options = {
    url: 'https://api.imgflip.com/get_memes',
    method: 'GET'
  }
  const onClickMemeIDHandler = () => {
    request(options, (err, response, body) => {
      if (!err && response.statusCode === 200) {
        let randomNumber = Math.floor(Math.random() * 100);
        let a = JSON.parse(body)["data"]["memes"][randomNumber]["id"];
        setMemeID(a)
        console.log(`a`, a)
        console.log(`memeId`, memeID)
        onClickMemeHandler(a);
      }
    });
  }



  async function onClickMemeHandler(a) {

    // request(options, (err, response, body) => {
    //   if (!err && response.statusCode === 200) {
    //     let randomNumber = Math.floor(Math.random() * 100);
    //     let a = JSON.parse(body)["data"]["memes"][randomNumber]["id"];
    //     // console.log(typeof (a))
    //     setMemeID(a)
    //     console.log(`memeId`, memeID)
    //   }
    // });

    const formData = new FormData();
    formData.append('username', 'DianaErokhina');
    formData.append("password", "QMBdhXvNrE34!ya");
    formData.append("template_id", a);
    formData.append("text0", "abc");
    formData.append("text1", "asgdf");

    const response = await fetch('https://api.imgflip.com/caption_image', {
      method: 'POST',
      body: formData
    });
    if (response) {
      const result = await response.json();
      console.log(`result`, result)
      setMeme(result.data.url)
    } else console.log(`sorry, there is an error`)
  }

  return (
    <div>
      <button
        className='button-new-joke'
        onClick={() => onClickMemeIDHandler()}
      >
        New Meme, please!
          </button>
      <br />
      <img src={meme} alt="meme" />
    </div>
  )
}
