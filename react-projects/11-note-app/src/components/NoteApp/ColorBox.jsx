export default function ColorBox(props) {
    const clickHandler = (color) => {
        props.onColor(color);
    };

    return (
        <>
            <div
                onClick={() => {
                    clickHandler(props.color);
                }}
                className="color-box"
                style={{ backgroundColor: props.color }}
            ></div>
        </>
    );
}
