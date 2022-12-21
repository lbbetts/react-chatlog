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

  const [likeCount, setLikeCount] = useState(0);
  const increaseLikeCount = () => {
    setLikeCount(likeCount + 1);
  };
  const decreaseLikeCount = () => {
    setLikeCount(likeCount - 1);
  };

  const updateEntryData = (updatedEntry) => {
    // console.log('Estoy dentro de updatedEntry!');
    const entries = entryData.map((entry) => {
      if (entry.id === updatedEntry.id) {
        //console.log(determineLikedState);
        if (determineLikedState.size === 0) {
          //console.log('Adding the first like!');
          increaseLikeCount();
          addLiked(entry.id);
          //console.log(determineLikedState);
        } else if (determineLikedState.includes(entry.id)) {
          decreaseLikeCount();
          removeLiked(entry.id);
          //console.log('Dislike!');
          //console.log('id is: ' + entry.id);
          //console.log('current set: ' + determineLikedState);
        } else {
          //console.log('Adding more likes!');
          increaseLikeCount();
          addLiked(entry.id);
          //console.log(determineLikedState);
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
        <h2>{likeCount} ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entryData} onUpdateEntry={updateEntryData}></ChatLog>
        {/* Wave 01: Render one ChatEntry component
            Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
}

// MOSTLY WORDS
// const App = () => {
//   const messageData = chatMessages;

//   return (
//     <div id="App">
//       <header>
//         <h1>CHAT LOG</h1>
//       </header>
//       <main>
//         <ChatLog entries={messageData}></ChatLog>
//         {/* Wave 01: Render one ChatEntry component
//         Wave 02: Render ChatLog component */}
//       </main>
//     </div>
//   );
// };

export default App;
