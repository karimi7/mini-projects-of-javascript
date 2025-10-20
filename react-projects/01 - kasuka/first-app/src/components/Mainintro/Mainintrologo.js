import './Mainintrologo.css'

function MainIntroLogo (props) {
    return (
        <div className='about-logo'>
            <img src={props.logoUrl} alt="logo" />
        </div>
    )
}

export default MainIntroLogo