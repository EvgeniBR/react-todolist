import React, { useState } from 'react';
import TodoForm from '../todoForm/TodoForm';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  
  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div>
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >

      <div key={todo.id} >
        <input type="checkbox" onClick={() => completeTodo(todo.id)}/>
        <i className={todo.isComplete ? 'far fa-check-square' : 'far fa-minus-square'}></i>
        {todo.text}
      </div>
      <div className='icons'>
        <button className="delete-icon">
      <i className="far fa-trash-alt" onClick={() => removeTodo(todo.id)} ></i>
      </button>
        <button className="edit-icon">
        <i className="far fa-edit" onClick={() => setEdit({ id: todo.id, value: todo.text })}></i>
      </button>
      
      </div>

    </div>
    <hr className="underLine"/>
    </div>
  ));
};

export default Todo;
