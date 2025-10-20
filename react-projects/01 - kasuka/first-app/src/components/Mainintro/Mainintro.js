import './Mainintro.css'
import MainIntroLogo from './Mainintrologo'

function MainIntro () {
    return (
        <div>
            <div className='container'>
                <div className='about'>
                    <div className='about-des'>
                        <p className='about-title'>Our Company</p>
                        <span className='about-text'>Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect. Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect. Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect. Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the background-attachment property to remove the scrolling effect. Scroll Up and Down this page to see the parallax scrolling effect. This div is just here to enable scrolling. Tip: Try to remove the.</span>
                    </div>
                    <div className='about-img'>
                        <img src="/image/about.jpg" alt="about" />
                    </div>
                </div>
                <div className='about-logos'>
                    <MainIntroLogo logoUrl="/image/client-1.png" />
                    <MainIntroLogo logoUrl="/image/client-2.png" />
                    <MainIntroLogo logoUrl="/image/client-3.png" />
                    <MainIntroLogo logoUrl="/image/client-4.png" />
                    <MainIntroLogo logoUrl="/image/client-5.png" />
                    <MainIntroLogo logoUrl="/image/client-6.png" />
                </div>
            </div>
        </div>
    )
}

export default MainIntro
