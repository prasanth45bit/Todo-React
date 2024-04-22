import React, { useState } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    const handleInputChange = (event) => 
    {
        setTodoInput(event.target.value);
    };

    const addTodo = () => 
    {
        if (todoInput.trim() !== "")
        {
            setTodos([...todos, { id: Date.now(), text: todoInput }]);
            setTodoInput('');
        }
        else 
        {
            alert("Please enter a valid task.");
        }
    };

    const deleteTodo = (id) => 
    {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todos-bg-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="todos-heading">Todos</h1>
                        <h1 className="create-task-heading">Create Task</h1>
                        <input
                            type="text"
                            value={todoInput}
                            onChange={handleInputChange}
                            className="todo-user-input"
                            placeholder="What needs to be done?"
                        />
                        <button onClick={addTodo} className="button" id="addTodoButton">Add</button>
                        <h1 className="todo-items-heading">My Tasks</h1>
                        <ul className="todo-items-container" id="todoItemsContainer">
                            {todos.map(todo => (
                                <li key={todo.id}>
                                    <div className="label-container">
                                        <input type="checkbox" className="checkbox-input" />
                                        <label className="checkbox-label">{todo.text}</label>
                                        <div className="delete-icon-container">
                                            <button onClick={() => deleteTodo(todo.id)} className="delete-icon">Delete</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className="button" id="saveTodoButton">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoApp;
