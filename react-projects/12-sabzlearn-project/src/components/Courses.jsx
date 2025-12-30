import { useState } from 'react';
import coursesData from '../CoursesData';
import Course from './Course';
import { Container } from 'react-bootstrap';
import './Responsive.css';
import { useLocation } from 'react-router';

export default function Courses() {
    const [courses] = useState(coursesData);

    let location = useLocation();
    console.log(location);

    return (
        <>
            <Container>
                <div className="courses-responsive">
                    {courses.map((course) => (
                        <Course key={course.id} {...course} />
                    ))}
                </div>
            </Container>
        </>
    );
}
