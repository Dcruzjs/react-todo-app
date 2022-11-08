import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ todo,onDelete }) {
  return (
    <TodoIcon
      type="delete"
      onClick={()=>onDelete(todo)}
    />
  );
}

export { DeleteIcon };