export default function Todo(props) {
    const checkHandler = (id) => {
        // console.log('check');
        props.onChange(id)
    };

    const removeHandler = (id) => {
        props.onRemove(id);
    };

    return (
        // 'completed' class for completed todos
        <div
            className={`todo ${props.completed ? 'completed' : ''}`}
            style={{ display: 'flex' }}
        >
            <li className="todo-item">{props.title}</li>

            <button
                onClick={() => checkHandler(props.id)}
                className="check-btn"
            >
                <i className="fas fa-check" aria-hidden="true"></i>
            </button>

            <button
                onClick={() => removeHandler(props.id)}
                className="trash-btn"
            >
                <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    );
}
