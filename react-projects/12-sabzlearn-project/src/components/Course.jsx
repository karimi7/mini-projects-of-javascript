import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export default function Course(props) {
    return (
        <>
            <Link to={`/course/${props.id}`} style={{textDecoration:'none', color:'#333'}}>
                <Card style={{ width: '18rem', cursor: 'pointer' }}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.price}
                        </Card.Text>
                        <Button variant="primary">Get Course</Button>
                    </Card.Body>
                </Card>
            </Link>
        </>
    );
}
