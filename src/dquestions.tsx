import React, { useState } from 'react';
import DQuestions2 from './dquestions2'; // Import the second detailed questions page

interface DetailedQuestion {
  id: number;
  questionText: string;
}

export const detailedQuestions: DetailedQuestion[] = [
  { id: 1, questionText: 'Do you prefer managing projects where you have full control, or do you thrive in collaborative environments?' },
  { id: 2, questionText: 'How comfortable are you with learning new programming languages or technical skills on your own?' },
  { id: 3, questionText: 'Would you prefer a job where you regularly interact with clients, or a more isolated role focused on individual tasks?' },
  { id: 4, questionText: 'Do you enjoy analyzing data and making decisions based on metrics, or do you rely more on intuition?' },
  { id: 5, questionText: 'Are you willing to work long hours if it means faster career advancement, or do you prioritize work-life balance?' },
  { id: 6, questionText: 'Would you rather work in a rapidly changing industry where you must constantly adapt, or a stable field with established practices?' },
  { id: 7, questionText: 'Do you see yourself in a leadership role within five years, or do you prefer staying in technical or specialized positions?' },
  { id: 8, questionText: 'Would you be comfortable with making high-stakes decisions that could have a significant impact on the company?' },
  { id: 9, questionText: 'How much does the culture and mission of a company influence your decision to work there?' },
  { id: 10, questionText: 'Are you more motivated by financial compensation, or by the opportunity to work on meaningful projects?' },
];

export const Dquestions: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [page, setPage] = useState<'questions' | 'nextPage'>('questions'); // Use state to manage page transitions

  const handleAnswerClick = (id: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
  };

  const getNextPage = () => {
    setPage('nextPage'); // Update the state to navigate to the next page
  };

  if (page === 'nextPage') {
    return <DQuestions2 />; // Render the next page when the button is clicked
  }

  return (
    <div className="detailed-question-page">
      <h1>Detailed Career Questions</h1>
      <div className="question-list">
        {detailedQuestions.map((q, index) => (
          <div key={q.id} className="question-item">
            <p>{index + 1}. {q.questionText}</p> {/* Add question number here */}
            <button onClick={() => handleAnswerClick(q.id, 'Yes')}>YES</button>
            <button onClick={() => handleAnswerClick(q.id, 'IDK')}>IDK</button>
            <button onClick={() => handleAnswerClick(q.id, 'No')}>NO</button>
          </div>
        ))}
      </div>
      <button onClick={getNextPage}>Go To Next Page</button> {/* Navigate to next page */}
    </div>
  );
};

export default Dquestions;
