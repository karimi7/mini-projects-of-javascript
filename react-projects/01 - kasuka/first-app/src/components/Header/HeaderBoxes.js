import './HeaderBoxes.css';

function HeaderBoxes(props) {
    return (
        <div>
            <div>
                <div className="headerBox">
                    <span>{props.text}</span>
                    <div className="headerBox-svg">{props.urlSVG}</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBoxes;
