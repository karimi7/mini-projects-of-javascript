export default function Note(props) {
    const removeHandler = (id) => {
        props.onRemove(id);
    };

    return (
        <>
            <div
                className="card shadow-sm rounded"
                style={{ backgroundColor: props.color }}
                onClick={() => {
                    removeHandler(props.id);
                }}
            >
                <p className="card-text p-3">{props.title}</p>
            </div>
        </>
    );
}
