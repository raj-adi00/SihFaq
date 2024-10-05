import React from 'react';
import { useParams } from 'react-router-dom';
import questionData from './Questions.json'; // Import the JSON data
import './CSS/QuestionPage.css'; // Import the CSS file for styling

const RandomQuestionPage = () => {
    const { index } = useParams(); // Get the index from URL params
    const questionIndex = parseInt(index, 10); // Convert index to a number

    // Get the question and answer from the JSON data
    const question = questionData[questionIndex];

    if (!question) {
        return <div className="error">Question not found.</div>;
    }

    return (
        <div className="question-page mt-96 p-5 md:p-8">
            <h1 className="question mb-10 mt-2">{question.question}</h1>
            {question.img && <img src={question.img} alt="Question related" className="question-image m-auto mt-3" />}
            <p className="answer mt-8" dangerouslySetInnerHTML={{__html: question.answer}}></p>
        </div>
    );
};

export default RandomQuestionPage;
