import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
  //Creamos un estado donde guardar el valor de nuestro nuevo Todo
  const [newTodo, setNewTodo] = React.useState('');
  // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  //Creamos una funcion para actualizar el estado de nuestro nuevo Todo
  const onChange = event => {
    setNewTodo(event.target.value)
  }

  //Funcion para cerrar el modal
  const onCancel = () =>setOpenModal(false);

  //Funcion para agregar nuestro nuevo Todo
  const onSubmit = event => {
    //prevent default para evitar recargar la pagina
    event.preventDefault();
    //Utilizamos nuestra funcion para añadir nuestro Todo
    addTodo(newTodo)
    //Cerramos el modal
    setOpenModal(false);
    //Reseteamos el formulario
    setNewTodo('')
  }

  return(
    <form onSubmit={onSubmit}>
      <label>Crea un nuevo ToDo:</label>
      <textarea
        value={newTodo}
        onChange={onChange}
        placeholder='Agrega un ToDo'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='buton'
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='TodoForm-button TodoForm-button--add'
        >
          Añadir
        </button>
      </div>
    </form>
  )


}

export { TodoForm }