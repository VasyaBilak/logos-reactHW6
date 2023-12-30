import React, { useEffect, useState } from 'react';
import Post from '../post/post';
import './comments.css';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState('');
  const [showPost, setShowPost] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  const handleCommentClick = (postId) => {
    setPost( postId.toString());
    setShowPost(true);
  };

  return (
    <div className='wrapper'>
        <div className='commentList'>
            <h2>Comment List</h2>
            {comments.map((comment)=> {
                        return  (
                                <div key={comment.id} onClick={() => handleCommentClick(comment.postId)} 
                                    style={{border: '1px solid black', margin: '10px'}}>
                                    <h4>{comment.name}</h4>
                                    <h4>{comment.email}</h4>
                                    <h4>{comment.body}</h4>
                                </div>
                            )
                    })}
        </div>
        <div className='post'>
            {showPost && (<Post postId={post}/>)}
        </div>
    </div>
  );
};

export default CommentList;