import { Button, FormControl, InputLabel, IconButton } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import db from './firebase'
import * as firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([

  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run code one when  the app component loads
    db.collection('messages')
      .orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })));
      })
  }, [])

  useEffect(() => {
    // const name = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'));

  }, []);

  console.log(input);
  console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      username: username,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput('');
  }

  return (
    <div className="App">

      <img className="app__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoHHfgVbPfqYR3NLCrPfeyaPuQfYHjoDwCJQ&usqp=CAU" alt="app-icon" />
      <h1>Hello Clever Programmers 🚀! </h1>

      {
        username &&
        <h2>Welcone {username} 👏</h2>
      }


      <FlipMove className="app__message">
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input placeholder="Enter a message..." labe="Filled" value={input} onChange={e => setInput(e.target.value)} autoComplete="off" />
          <IconButton color="primary" disabled={!input} variant="contained" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

    </div>
  );
}

export default App;
