import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import coursesData from '../CoursesData';
import { Container } from 'react-bootstrap';
import './Responsive.css';
import './style.css'

export default function MainCourse() {
    const [mainCourse] = useState(coursesData);

    let params = useParams();
    let mainCoursesData = mainCourse.find(
        (course) => course.id == params.courseID
    );
    console.log(mainCoursesData);

    let navigate = useNavigate()

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
                        <button onClick={() => {
                            navigate('/login')
                        }} className='course-btn'>خرید دوره</button>
                    </div>
                </div>
            </Container>
        </>
    );
}
