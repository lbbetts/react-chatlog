import React from 'react';
import './ChatLog.css';
// import './ChatEntry.css'
// import './ChatEntry';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatComponents = props.entries.map((entry, index) => {
    return (
      <p key={index}>
        <ChatEntry
          sender={entry.sender}
          body={entry.body}
          time={entry.timeStamp}
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
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ),
};

export default ChatLog;
