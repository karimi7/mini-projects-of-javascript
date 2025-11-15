import Header from './Header';
import Todo from './Todo';

import { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');
    // const [status, setStatus] = useState('all');

    const todoTitleHandler = (event) => {
        console.log(event.target.value);

        setTodoTitle(event.target.value);
    };
    
    const addTodo = (event) => {
        event.preventDefault();
        setTodoTitle(event.target.value);

        if (!setTodoTitle('')) {
            let newTodoObject = {
                id: todos.length + 1,
                title: todoTitle,
                completed: false,
            };

            setTodos([...todos, newTodoObject]);

            setTodoTitle('');
        }
    };

    return (
        <>
            <Header />
            <form onSubmit={addTodo}>
                <input
                    onChange={todoTitleHandler}
                    value={todoTitle}
                    type="text"
                    className="todo-input"
                    maxLength="40"
                />

                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>

                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <Todo {...todo} key={todo.id} />
                    ))}
                </ul>
            </div>
        </>
    );
}
