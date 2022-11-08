import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ todo, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={todo.completed ? '#4caf50' : 'gray'}
      onClick={()=>onComplete(todo)}
    />
  );
}

export { CompleteIcon };