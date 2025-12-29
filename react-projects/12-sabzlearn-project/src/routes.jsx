import Courses from './components/Courses';
import MainCourse from './components/MainCourse';
import MainPage from './components/mainPage';
import AboutPage from './components/AboutPage';
import Login from './components/Login';
import Panel from './components/Panel';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

let routes = [
        { path:"/", element:<MainPage /> },
        { path:"/courses", element:<Courses />},
        { path:"/course/:courseID", element:<MainCourse />},
        { path:"/about/*", element:<AboutPage />, children: [
                { path:"setting", element:<p style={{ textAlign: 'center' }}>Setting</p>},
                { path:"dashboard", element:<p style={{ textAlign: 'center' }}>dashboard</p>}
        ]},
        { path:"/login", element:<Login/>},
        { path:"/*", element:<PrivateRoute/>, children:[
                {path:'panel', element:<Panel/>},
                {path:'dashboard', element:<Dashboard/>},
        ]}
]

export default routes
