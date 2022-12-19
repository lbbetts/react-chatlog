import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import TimeStamp from './components/TimeStamp';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry body="hello!" sender="bob" timeStamp="now"></ChatEntry>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
