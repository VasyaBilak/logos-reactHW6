import React, { useEffect, useState } from 'react';

const Post = ({ postId }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      <h2>Post</h2>
      <p><b>Title:</b> {post.title}</p>
      <p><b>Body:</b> {post.body}</p>
      <p>{postId}</p>
    </div>
  );
};

export default Post;