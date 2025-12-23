import React, { useState } from 'react';
import coursesData from '../CoursesData';
import Course from './Course';
import { Container } from 'react-bootstrap';

export default function Courses() {
    const [courses, setCourses] = useState(coursesData);
    return (
        <>
            <Container>
                <div style={{display:'flex' , justifyContent:'space-around', marginTop:'5rem'}}>
                    {courses.map((course) => (
                        <Course key={course.id} {...course} />
                    ))}
                </div>
            </Container>
        </>
    );
}
