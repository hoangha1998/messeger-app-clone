import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['Hello', 'Hi', 'Whats Up']);

  console.log(input);
  console.log(messages);

  const sendMessage = (e) => {
    e.preventDefault();

    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Clever Programmers 🚀️! </h1>

      <form>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit" onClick={sendMessage}>Send Message</button>
      </form>
     

      {
        messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
