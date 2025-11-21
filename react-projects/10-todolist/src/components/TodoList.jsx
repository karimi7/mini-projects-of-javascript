import Header from './Header';
import Todo from './Todo';

import { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');
    const [status, setStatus] = useState('all');

    const todoTitleHandler = (event) => {
        console.log(event.target.value);

        setTodoTitle(event.target.value);
    };

    const addTodo = (event) => {
        event.preventDefault();
        setTodoTitle(event.target.value);

        let newTodoObject = {
            id: todos.length + 1,
            title: todoTitle,
            completed: false,
        };

        setTodos([...todos, newTodoObject]);
        setTodoTitle('');
    };

    const enterTodoHandler = (event) => {
        if (event.code === 'Enter') {
            addTodo();
        }
    };

    const removeTodo = (todoID) => {
        let newTodos = todos.filter((todo) => {
            return todo.id !== todoID;
        });
        setTodos([...newTodos]);
    };

    const changeTodo = (todoID) => {
        todos.forEach((todo) => {
            if (todo.id === todoID) {
                todo.completed = !todo.completed;
            }
        });
        setTodos([...todos]);
    };

    const statusHandler = (event) => {
        console.log(event.target.value);

        setStatus(event.target.value);
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
                    <select
                        onChange={statusHandler}
                        name="todos"
                        className="filter-todo"
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

            <div className="todo-container">
                <ul className="todo-list">
                    {status === 'uncompleted' &&
                        todos
                            .filter((todo) => !todo.completed)
                            .map((todo) => (
                                <Todo
                                    {...todo}
                                    onRemove={removeTodo}
                                    onChange={changeTodo}
                                    key={todo.id}
                                />
                            ))}

                    {status === 'completed' &&
                        todos
                            .filter((todo) => todo.completed)
                            .map((todo) => (
                                <Todo
                                    {...todo}
                                    onRemove={removeTodo}
                                    onChange={changeTodo}
                                    key={todo.id}
                                />
                            ))}

                    {status === 'all' &&
                        todos.map((todo) => (
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
