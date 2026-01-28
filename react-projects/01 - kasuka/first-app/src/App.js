import './App.css';
import Header from './components/Header/Header';
import MainIntro from './components/Mainintro/Mainintro';
import Features from './components/Features/Features';

function App() {
    return (
        <div className="app-container">
            <Header />
            <MainIntro />
            <Features />
        </div>
    )
}

export default App;
