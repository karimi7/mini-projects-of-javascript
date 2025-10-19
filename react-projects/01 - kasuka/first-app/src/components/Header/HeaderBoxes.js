import './HeaderBoxes.css'

function HeaderBoxes (props) {
    console.log(props);
    
    return (
        <div>
            <div>
                <div className='headerBox'>
                    <span>{props.text}</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderBoxes