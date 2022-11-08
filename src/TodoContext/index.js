import React from 'react';
import {useLocalStorage} from './useLocalStorage';


// Al crear el contexto también podemos pasarle un valor inicial entre los paréntesis
const TodoContext = React.createContext()

function TodoProvider(props) {
  // Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales
  const [id,setId] = React.useState(0);
  const {item:todos, saveItem:setTodos, error, loading} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
 


  const addTodo = (text) => {
    setId(prevId => ++prevId);
    const newTodos = [...todos]
    newTodos.push({
      id: id,
      completed: false,
      text,
    })
    setTodos(newTodos)
  }

  const changeTodoState = (todo) => {
    let newTodos = todos.map(myTodo => myTodo.id === todo.id ? { ...myTodo, completed: !myTodo.completed } : myTodo)
    setTodos(newTodos)
    
  }

  const deleteTodo = (todo) =>{
    let newTodos =  todos.filter(myTodo => myTodo.id !== todo.id)
    setTodos(newTodos)
  }

  let searchedTodos = todos;
  
  if(searchValue.length > 1){
    searchedTodos = searchedTodos.filter( todo => 
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
      )
  }

  // Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children
  return(
    <TodoContext.Provider value={{
      error,
      loading,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      changeTodoState,
      deleteTodo,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider}