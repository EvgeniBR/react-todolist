import React, { useEffect, useState } from "react";
import Todo from "../todo/Todo";
import TodoForm from "../todoForm/TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(`todo`))) {
      setTodos(JSON.parse(localStorage.getItem(`todo`)));
    }
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    localStorage.setItem(`todo`, JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    localStorage.setItem(`todo`, JSON.stringify(removedArr));
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div >
      <TodoForm onSubmit={addTodo} />
      <div className="list-container">
      <h1>Todo List <hr className="line" /></h1>
      
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      </div>
    </div>
  );
}

export default TodoList;
