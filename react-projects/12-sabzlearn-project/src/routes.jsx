import Courses from './components/Courses';
import MainCourse from './components/MainCourse';
import MainPage from './components/mainPage';
import AboutPage from './components/AboutPage';

let routes = [
        { path:"/", element:<MainPage /> },
        { path:"/courses", element:<Courses />},
        { path:"/course/:courseID", element:<MainCourse />},
        { path:"/about/*", element:<AboutPage />, children: [
                { path:"setting", element:<p style={{ textAlign: 'center' }}>Setting</p>},
                { path:"dashboard", element:<p style={{ textAlign: 'center' }}>dashboard</p>}
            ]
        }
]

export default routes
