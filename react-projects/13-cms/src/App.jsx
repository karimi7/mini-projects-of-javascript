import Home from './pages/Home/Home';
import routes from './routes';
import { useRoutes } from 'react-router';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/Sidebar/SideBar';
import './App.css';

export default function App() {
    let router = useRoutes(routes);

    return (
        <>
            <div className="container">
                <TopBar />
                <div className="containerMain">
                    <SideBar />
                    <div className="router-style">{router}</div>
                </div>
            </div>
        </>
    );
}
