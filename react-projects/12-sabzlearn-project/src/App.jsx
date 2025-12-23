import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Courses from './components/Courses';
import MainCourse from './components/MainCourse';
import MainPage from './components/mainPage';
import AboutPage from './components/AboutPage';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:courseID" element={<MainCourse />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    );
}
