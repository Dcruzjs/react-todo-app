import React from 'react';
import { TodoProvider } from '../TodoContext';
import {AppUI} from './AppUI';

const defaultTodos = [
  {id:1, text: "Curso de JavaScript", completed:true},
  {id:2, text: "Curso de React", completed:false},
  {id:3, text: "Curso de FullStack Dev con Js", completed:false},
]




function App() {

  return ( 
    <TodoProvider>
      <AppUI />
    </TodoProvider>
   );
}

export default App;
