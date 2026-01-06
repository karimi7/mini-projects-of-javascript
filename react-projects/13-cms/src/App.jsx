import Home from './pages/Home/Home';
import routes from './routes';
import { useRoutes } from 'react-router';

export default function App() {
    let router = useRoutes(routes);

    return (
        <>
            <h1>react</h1>
            {router}
        </>
    );
}
