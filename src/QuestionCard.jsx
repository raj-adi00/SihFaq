import React from 'react';
import './CSS/QuestionCard.css'; // Custom CSS for glassy effect
import { Link } from 'react-router-dom';

const QuestionCard = ({ question, index, answer, img }) => {
  console.log(question)
  return (
    <Link to={`/question/${index}`}>
      <div className="question-card">
        <h4>{question}</h4>
      </div>
    </Link>
  );
};

export default QuestionCard;
