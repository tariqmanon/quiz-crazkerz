import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='container'>
            <h2>404 ! Page Not Found</h2>
            <Button className='quiz-btn'><Link to="/">Go TO HomePage</Link></Button>
        </div>
    );
};

export default Error;