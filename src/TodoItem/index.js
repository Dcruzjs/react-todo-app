import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem({ todo, deleteTodo, changeTodoState }) {

  return (
    <li className="TodoItem">
    {/* <span 
         className={`Icon Icon-check ${todo.completed && 'Icon-check--active'}`}
         onClick={() => changeTodoState(todo)}
       >
         √
       </span> */}
      <CompleteIcon
        todo={todo}
        completed={todo.completed}
        onComplete={changeTodoState}
      />
      <p className={`TodoItem-p ${todo.completed && 'TodoItem-p--complete'}`}>
        {todo.text}
      </p>
      {/* <span
         className="Icon Icon-delete"
         onClick={() => deleteTodo(todo)}
       >
         X
       </span> */}
      <DeleteIcon
        todo={todo}
        onDelete={deleteTodo}
      />
    </li>
  );
}

export { TodoItem };