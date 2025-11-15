export default function Todo(props) {
    return (
        // 'completed' class for completed todos
        <div className={`todo ${props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
            <li className="todo-item">{props.title}</li>

            <button className="check-btn">
                <i className="fas fa-check" aria-hidden="true"></i>
            </button>

            <button className="trash-btn">
                <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    );
}
