import { useState } from 'react';
import { useParams } from 'react-router';
import coursesData from '../CoursesData';
import { Container } from 'react-bootstrap';
import './Responsive.css';

export default function MainCourse() {
    const [mainCourse] = useState(coursesData);

    let params = useParams();
    let mainCoursesData = mainCourse.find(
        (course) => course.id == params.courseID
    );
    console.log(mainCoursesData);

    return (
        <>
            <Container style={{ marginTop: '5rem' }}>
                <div className="row-responsive">
                    <div className="col-responsive">
                        <img src={mainCoursesData.img} />
                    </div>
                    <div
                        className="col-responsive"
                        style={{ direction: 'rtl' }}
                    >
                        <h2>{mainCoursesData.title}</h2>
                        <br />
                        <p>{mainCoursesData.description}</p>
                    </div>
                </div>
            </Container>
        </>
    );
}
