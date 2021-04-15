/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import Chat from './Chat/Chat';

export default function Popup() {
  const { isAuthorized } = useSelector((state) => state);
  return (
    <div>
      {isAuthorized
        ? <Chat />
        : <Alert variant="info">You need to log in to use the app's features, but I promise it's worth it!</Alert>}
    </div>
  );
}
