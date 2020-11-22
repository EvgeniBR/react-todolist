import React, { useState  } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  const handleSubmit = (e) =>{
      e.preventDefault()
      props.onSubmit({
        id: Math.floor(Math.random()*100000),
        text:input
      })

      setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="&#xf02c; What needs to be done?"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button"><i class="fas fa-plus-circle"></i>  Add</button>
    </form>
  );
}

export default TodoForm;
