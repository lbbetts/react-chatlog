import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  const onLikeClick = () => {
    console.log('Estoy dentro de onLike!');
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };

    // Invoke the function passed in through the prop named "onUpdate"
    // This function is referenced by the name "updateStudentData" in App
    console.log(updatedEntry);
    props.onUpdate(updatedEntry);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp}></TimeStamp>
        </p>
        <button className="like" onClick={onLikeClick}>
          {props.liked ? '❤️' : '🤍'}
          {/* { isLiked ? increaseLikeCount : decreaseLikeCount } */}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.isRequired,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

// MOSTLY WORKING
// const ChatEntry = (props) => {
//   const [isLiked, setIsLiked] = useState(true);
//   const changeLiked = () => {
//     setIsLiked(!isLiked);
//   };
//   const [likeCount, setLikeCount] = useState(0);
//   const increaseLikeCount = () => {
//     setLikeCount(likeCount + 1);
//     // console.log(likeCount+1)
//   };
//   const decreaseLikeCount = () => {
//     setLikeCount(likeCount - 1);
//     //   console.log(likeCount-1)
//   };

//   const makeChanges = () => {
//     changeLiked();
//     if (isLiked) {
//       increaseLikeCount();
//     } else if (!isLiked) {
//       decreaseLikeCount();
//     }
//     console.log(likeCount);
//   };

//   return (
//     <div className="chat-entry local">
//       <h2 className="entry-name">{props.sender}</h2>
//       <section className="entry-bubble">
//         <p>{props.body}</p>
//         <p className="entry-time">
//           <TimeStamp time={props.timeStamp}></TimeStamp>
//         </p>
//         <button className="like" onClick={makeChanges}>
//           {isLiked ? '🤍' : '❤️'} {likeCount}
//           {/* { isLiked ? increaseLikeCount : decreaseLikeCount } */}
//         </button>
//       </section>
//     </div>
//   );
// };

// ChatEntry.propTypes = {
//   id: PropTypes.number,
//   sender: PropTypes.string,
//   body: PropTypes.string,
//   timeStamp: PropTypes.string,
//   liked: PropTypes.bool,
// };

export default ChatEntry;
