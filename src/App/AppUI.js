import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton} from "../CreateTodoButton";
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI() {
    const {
    error,
    loading,
    searchedTodos,
    deleteTodo,
    changeTodoState,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)
  return(

    <>
      <TodoCounter />
      <TodoSearch />
       {/* Podemos acceder a nuestro contexto con el consumer */}
      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading /> }
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        {searchedTodos.map( todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          changeTodoState={changeTodoState}
          deleteTodo={deleteTodo}
        />))}
      
      </TodoList>
      {
        !!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }
      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

    </>
  )
}

export { AppUI };