import React from 'react';
import { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

function App() {
  // const [entryData, setEntryData] = useState(chatMessages);
  const [messages, setMessages] = useState(chatMessages);
  const [likedMessages, setLikedMessages] = useState(new Set());

  const toggleLikeForMessage = (id) => {
    setLikedMessages(likedMessages => {
      if (likedMessages.has(id)) {
        likedMessages.delete(id);
      } else {
        likedMessages.add(id)
      }
      return likedMessages;
    })
    setMessages(messages => {
      let newMessages = messages.map(message => {
        if (message.id !== id) {
          return message;
        }
        message.liked = !message.liked;
        return message;
      })
      return newMessages;
    });
  }

  return (
    <div id="App">
      <header>
        <h1>CHAT LOG</h1>
        <h2>{likedMessages.size} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={messages} onLikeClicked={toggleLikeForMessage}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
            Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
}

export default App;
