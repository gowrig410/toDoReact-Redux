import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './Store/slice/TodoSlise';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim() === '') {
      toast.error('Please add your todo.');
      return;
    }
    dispatch(addTodo(todo));
    setTodo('');
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div className='container'>
      <h1>My Todo List</h1>

      {/* Add the image using a URL */}
      <img src="https://plus.unsplash.com/premium_photo-1661963783275-dff88a0296f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Simple Todo List" className="todo-image" />

      <div className='input-group'>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className='todo-input'
          placeholder='Add a new todo...'
        />
        <button
          onClick={handleAddTodo}
          className='todo-button'
        >
          Add
        </button>
      </div>

      <div className='todo-list'>
        {todos.map((todoItem, index) => (
          <div key={index} className='todo-item'>
            <div className='todo-text'>
              <h5>{index + 1}.</h5>
              <p>{todoItem}</p>
            </div>
            <button
              onClick={() => handleDeleteTodo(index)}
              className='delete-button'
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className='total-count'>
        Total in list: <span>{todos.length}</span>
      </div>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover theme="light" />
    </div>
  );
}

export default App;
