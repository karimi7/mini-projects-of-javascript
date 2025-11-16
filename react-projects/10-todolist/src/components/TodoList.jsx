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

        // if (setTodoTitle['']) {
        // }

        let newTodoObject = {
            id: todos.length + 1,
            title: todoTitle,
            completed: false,
        };

        setTodos([...todos, newTodoObject]);
        setTodoTitle('');
    };

    const enterTodoHandler = (event) => {
        setTodoTitle(event.target.value);
        if (event.code === 'Enter') {
            event.preventDefault();
            let newTodoObject = {
                id: todos.length + 1,
                title: todoTitle,
                completed: false,
            };
            setTodos([...todos, newTodoObject]);
            setTodoTitle('');
        }
    };

    const removeTodo = (todoID) => {
        console.log(todoID);
        let newTodos = todos.filter((todo) => {
            return todo.id !== todoID;
        });
        setTodos([...newTodos]);
        console.log(newTodos);
    };

    const changeTodo = (todoID) => {
        console.log(todoID);

        // let newTodos = [...todos];

        todos.forEach((todo) => {
            if (todo.id === todoID) {
                todo.completed = !todo.completed;
            }
        });

        // console.log(newTodos);
    };

    return (
        <>
            <Header />
            <form onSubmit={addTodo} onKeyPress={() => enterTodoHandler(event)}>
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
                        <Todo
                            {...todo}
                            onRemove={removeTodo}
                            onChange={changeTodo}
                            key={todo.id}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}
