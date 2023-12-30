import React, { useState } from 'react';
import TodoList from '../todos/todos';
import AlbumList from '../albums/albums';
import CommentList from '../comments/comments';

const Header = () => {
    const [ route, setRoute ] = useState('');
    const todos = () => {
        setRoute('todos');
    }

    const albums = () => {
        setRoute('albums');
    }

    const comments = () => {
        setRoute('comments');
    }

    return (
        <>
            <nav>
                <ul>
                    <li onClick={todos}>Todos</li>
                    <li onClick={albums}>Albums</li>
                    <li onClick={comments}>Comments</li>
                </ul>
            </nav>
            <div>
                {route==='todos' && (<TodoList />)}
                {route==='albums' && (<AlbumList />)}
                {route==='comments' && (<CommentList />)}
            </div>
        </>
  );
};

export default Header;