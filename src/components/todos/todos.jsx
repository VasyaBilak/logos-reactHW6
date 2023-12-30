import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo)=> {
                return  (
                        <div key={todo.id} style={{border: '1px solid black', margin: '10px'}}>
                            <h4>{todo.title}</h4>
                        </div>
                    )
            })}
    </div>
  );
};

export default TodoList;