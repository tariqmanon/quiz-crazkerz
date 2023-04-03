import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { name, id, logo, total } = topic;
    return (

        <div className='topic'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Total Question: {total}
                    </Card.Text>
                    <Button className='quiz-btn' variant="info"><Link to={`/topic/${id}`}>
                        Go to Quiz</Link></Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Topic;