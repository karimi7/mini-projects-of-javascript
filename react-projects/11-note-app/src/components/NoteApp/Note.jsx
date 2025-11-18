export default function Note(props) {
    return (
        <>
            <div
                className="card shadow-sm rounded"
                style={{ backgroundColor: props.color }}
            >
                <p className="card-text p-3">{props.title}</p>
            </div>
        </>
    );
}
