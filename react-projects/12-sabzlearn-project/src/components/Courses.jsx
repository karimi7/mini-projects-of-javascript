import { useState } from 'react';
import coursesData from '../CoursesData';
import Course from './Course';
import { Container } from 'react-bootstrap';
import './Responsive.css';

export default function Courses() {
    const [courses] = useState(coursesData);
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
