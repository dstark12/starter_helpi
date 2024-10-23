import React, { useState } from 'react';
import Dquestions from './dquestions'; // Import the first detailed questions page
import Results from './results'; // Import the results page
import './dquestions2.css';


interface DetailedQuestion {
  id: number;
  questionText: string;
}

export const detailedQuestions2: DetailedQuestion[] = [
  { id: 9, questionText: 'Do you prefer working in a fast-paced environment with tight deadlines, or do you work better with more flexibility?' },
  { id: 10, questionText: 'Would you rather work for a small startup where you wear many hats, or a large corporation with more defined roles?' },
  { id: 11, questionText: 'How important is job stability to you when considering career options?' },
  { id: 12, questionText: 'Do you enjoy problem-solving through hands-on experimentation, or do you prefer researching and analyzing before taking action?' },
  { id: 13, questionText: 'Would you consider relocating for a job if it offered a significant opportunity for growth?' },
  { id: 14, questionText: 'Do you thrive in roles that require constant communication, or do you prefer tasks that allow you to work independently?' },
  { id: 15, questionText: 'Are you comfortable with taking on roles that require a high degree of risk, or do you prefer more predictable and secure positions?' },
  { id: 16, questionText: 'Do you value the opportunity to travel for work, or would you rather have a role that keeps you closer to home?' },
];

const DQuestions2: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [page, setPage] = useState<'firstPage' | 'secondPage' | 'results'>('secondPage'); // Use state to manage page transitions

  const handleAnswerClick = (id: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
  };

  const goBackToPreviousPage = () => {
    setPage('firstPage'); // Update the state to navigate back to the first page
  };

  const goToResults = () => {
    setPage('results'); // Update the state to navigate to the results page
  };

  if (page === 'firstPage') {
    return <Dquestions />; // Render the first page when the "Previous Page" button is clicked
  }

  if (page === 'results') {
    return <Results />; // Render the results page when the "See Results" button is clicked
  }

  return (
    <div className="detailed-question-page">
      <h1>Detailed Career Questions - Page 2</h1>
      <div className="question-list">
        {detailedQuestions2.map((q, index) => (
          <div key={q.id} className="question-item">
            <p>{index + 11}. {q.questionText}</p> {/* Add question number here starting from 11 */}
            <button onClick={() => handleAnswerClick(q.id, 'Yes')}>YES</button>
            <button onClick={() => handleAnswerClick(q.id, 'IDK')}>IDK</button>
            <button onClick={() => handleAnswerClick(q.id, 'No')}>NO</button>
          </div>
        ))}
      </div>

      {/* Add extra space before the navigation buttons */}
      <div className="button-container">
        <button onClick={goBackToPreviousPage}>Previous Page</button>
        <button onClick={goToResults}>See Results</button>
      </div>
    </div>
  );
};

export default DQuestions2;
