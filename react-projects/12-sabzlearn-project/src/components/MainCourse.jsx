import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router';
import coursesData from '../CoursesData';
import { Container, Row, Col } from 'react-bootstrap';

export default function MainCourse(props) {
    const [mainCourse] = useState(coursesData);
    let params = useParams();
    // console.log(params.courseID);

    let mainCoursesData = mainCourse.find(
        (course) => course.id == params.courseID
    );

    console.log(mainCoursesData);

    // let hasCourse = course.some((course) => course.id == params.id);

    return (
        <>
            <Container style={{ marginTop: '5rem' }}>
                <Row>
                    <Col>
                        <img
                            src={mainCoursesData.img}
                            style={{ width: '80%' }}
                        />
                    </Col>
                    <Col style={{ direction: 'rtl' }}>
                        <h2>{mainCoursesData.title}</h2>
                        <br />
                        <p>{mainCoursesData.description}</p>
                    </Col>
                </Row>
            </Container>

            {/* {!hasCourse ? (
                <>
                    <Navigate to="/" />
                </>
            ) : (
                <>
                    <h2>
                        MainCourse :{' '}
                        {course.find((course) => course.id == params.id).title}
                    </h2>
                    <br/>
                    <Link to='/'>Home</Link>
                </>
            )} */}
        </>
    );
}
