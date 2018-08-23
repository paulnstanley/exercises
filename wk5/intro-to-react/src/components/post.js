import React, { Component } from 'react';

const Post = (props) => {
  const handleUpvoteClick = () => {
    props.upvotePost(props.post)
  }

  return (
    <li>
      <span>{props.post.user} - {props.post.text}</span>
      <button onClick={handleUpvoteClick}>upvote</button>
    </li>
  )
}

export default Post
