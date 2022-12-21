import React from 'react';
import { useState } from 'react';
import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

function App() {
  const [entryData, setEntryData] = useState(chatMessages);

  const [determineLikedState, setLikedState] = useState([]);
  const addLiked = (indy) => {
    setLikedState((oldState) => [...oldState, indy]);
  };
  const removeLiked = (indy) => {
    setLikedState((oldState) => oldState.filter((item) => item !== indy));
  };

  const updateEntryData = (updatedEntry) => {
    const entries = entryData.map((entry) => {
      if (entry.id === updatedEntry.id) {
        if (determineLikedState.size === 0) {
          addLiked(entry.id);
        } else if (determineLikedState.includes(entry.id)) {
          removeLiked(entry.id);
        } else {
          addLiked(entry.id);
        }
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setEntryData(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>CHAT LOG</h1>
        <h2>{determineLikedState.length} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entryData} onUpdateEntry={updateEntryData}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
            Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
}

export default App;
