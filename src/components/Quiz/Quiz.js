import React, { useState } from 'react';
import './Quiz.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    console.log(correctAnswer);
    const [visible, setVisible] = useState(false);
    const handleToggle = () => {
        setVisible((current => !current));
    };
    return (
        <div>
            <div className='quiz'>
                <h2><small>{question}</small></h2>
                {
                    options.map(opt => <li type='A'
                        key={opt.id}
                    >{opt}</li>)
                }

                <button onClick={handleToggle}>
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </button>
                {visible && <p>{correctAnswer}</p>}

            </div>

        </div>
    );
};

export default Quiz;