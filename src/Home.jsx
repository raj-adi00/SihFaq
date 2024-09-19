import React from 'react';
import './CSS/Home.css';
import Navbar from './Navbar';
import query from './Questions.json';
import QuestionCard from './QuestionCard';

function Home() {
    return (
        <div className='mt-20'>
            {query.map((questions, index) => (
                <QuestionCard key={index} question={questions.question} index={index} />
            ))}
        </div>
    );
}

export default Home;
