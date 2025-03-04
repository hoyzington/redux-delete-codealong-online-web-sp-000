import React from 'react'

const Todo = props => (
  <li>
    {props.todo.text}&nbsp;
    <button onClick={() => props.delete(props.todo.id)}>
      Delete
    </button>
  </li>
)

export default Todo
