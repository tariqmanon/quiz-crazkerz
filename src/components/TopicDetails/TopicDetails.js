import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const TopicDetails = () => {
    const topicDetails = useLoaderData().data;
    const { name } = topicDetails;

    return (
        <div className='container'>
            <h2>Quiz Of {name}</h2>
            {
                topicDetails.questions.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            }


        </div>
    );
};

export default TopicDetails;