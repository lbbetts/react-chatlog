import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';
import { useState } from 'react';

const ChatEntry = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const changeLiked = () => {
      setIsLiked(!isLiked)
  }
  const [likeCount, setLikeCount] = useState(0);
  const increaseLikeCount = () => {
      setLikeCount(likeCount+1)
  }
  const decreaseLikeCount = () => {
    setLikeCount(likeCount-1)
}

  // const makeChanges = () => {
  //   changeLiked() 
  //   increaseLikeCount()
  //   console.log(likeCount)
  
  // }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        {/* <p>Number of likes: {likeCount}</p> */}
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={ changeLiked }>
          { isLiked ? '❤️' : '🤍' }
          { isLiked ? increaseLikeCount : decreaseLikeCount }
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
};

export default ChatEntry;
