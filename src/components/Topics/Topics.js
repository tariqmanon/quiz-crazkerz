import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics)
    return (
        <div>
            <div className='container'>
                <div className='header-main'>
                    <h1>Test Your Web Development Skills: Take Our Quiz Now!</h1>
                    <p><small>Are you a web developer looking to test your knowledge and skills? Or are you a newbie who wants to learn more about web development? Take our quiz and find out where you stand! Our quiz covers topics such as HTML, CSS, JavaScript, and web development frameworks. With multiple-choice questions and immediate feedback, you'll learn as you go and improve your skills. Try it now!</small></p>
                </div>
                <h2> Our Topics : {topics.data.length}</h2>


                <div className='header-topics'>
                    {
                        topics.data.map(topic => <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Topics;