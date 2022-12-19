import React from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const messageData = chatMessages;

  return (
    <div id="App">
      <header>
        <h1>CHAT LOG</h1>
      </header>
      <main>
        <ChatLog entries={messageData}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
