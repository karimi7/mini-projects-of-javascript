import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Courses from './components/Courses';
import MainCourse from './components/MainCourse';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:courseID" element={<MainCourse />} />
            </Routes>
        </>
    );
}
