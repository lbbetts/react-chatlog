import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onLikeClicked }) => {
  return (
    <div id={id} className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <div className="entry-time">
          <TimeStamp time={timeStamp}></TimeStamp>
        </div>
        <button className="like" onClick={onLikeClicked}>
          {liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onLikeClicked: PropTypes.func.isRequired,
};

export default ChatEntry;
