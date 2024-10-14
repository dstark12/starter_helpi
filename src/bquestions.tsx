import React, { useState } from 'react';

interface Question {
  id: number;
  questionText: string;
}

const questions: Question[] = [
  { id: 1, questionText: 'Do you enjoy working with technology or using computers?' },
  { id: 2, questionText: 'Are you interested in creative tasks like designing, writing, or creating things?' },
  { id: 3, questionText: 'Do you prefer working with people more than working alone?' },
  { id: 4, questionText: 'Do you prefer a structured routine over flexibility in your daily tasks?' },
  { id: 5, questionText: 'Is job stability and security more important to you than personal passion?' },
  { id: 6, questionText: 'Do you enjoy solving complex problems or puzzles?' },
  { id: 7, questionText: 'Would you be comfortable with a career that requires frequent travel or relocation?' },
];

const BQuestions: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswerClick = (id: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
  };

  const getResults = () => {
    // This can be where results are processed or API interaction can take place
    console.log('User answers:', answers);
    // Example: You can integrate GPT or further process the answers here
  };

  return (
    <div className="basic-question-page">
      <h1>Basic Career Questions</h1>
      <div className="question-list">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <p>{q.questionText}</p>
            <button onClick={() => handleAnswerClick(q.id, 'Yes')}>YES</button>
            <button onClick={() => handleAnswerClick(q.id, 'IDK')}>IDK</button>
            <button onClick={() => handleAnswerClick(q.id, 'No')}>NO</button>
          </div>
        ))}
      </div>
      <button onClick={getResults}>Get Answer</button>
    </div>
  );
};

export default BQuestions;