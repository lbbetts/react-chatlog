import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLikeClicked }) => {
  const chatComponents = entries.map((entry, index) => {
    return (
      <div key={index}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLikeClicked={() => onLikeClicked(entry.id)}
        ></ChatEntry>
      </div>
    );
  });

  return (
    <section>
      <div>{chatComponents}</div>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ),
  onLikeClicked: PropTypes.func.isRequired,
};

export default ChatLog;
