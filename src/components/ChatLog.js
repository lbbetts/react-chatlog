import React from 'react';
import './ChatLog.css';
// import './ChatEntry.css'
// import './ChatEntry';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry, index) => {
    console.log(entry);
    return (
      <p key={index}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          liked={entry.liked}
          onUpdate={props.onUpdateEntry}
        ></ChatEntry>
      </p>
    );
  });

  return (
    <section>
      <p>{chatComponents}</p>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  onUpdateEntry: PropTypes.func,
};

// const ChatLog = (props) => {
//   const chatComponents = props.entries.map((entry, index) => {
//     if (Object['liked'] === true) {
//       console.log('hewwo');
//     }
//     return (
//       <p key={index}>
//         <ChatEntry
//           sender={entry.sender}
//           body={entry.body}
//           time={entry.timeStamp}
//         ></ChatEntry>
//       </p>
//     );
//   });

//   return (
//     <section>
//       <p>{chatComponents}</p>
//     </section>
//   );
// };

// ChatLog.propTypes = {
//   entries: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       sender: PropTypes.string,
//       body: PropTypes.string,
//       timeStamp: PropTypes.string,
//       liked: PropTypes.bool,
//     })
//   ),
// };

export default ChatLog;
