import React, { useState } from 'react';
import Results from './results'; // Import the results page

interface DetailedQuestion {
  id: number;
  questionText: string;
}

export const detailedQuestions2: DetailedQuestion[] = [
  { id: 11, questionText: 'Do you prefer working in a fast-paced environment with tight deadlines, or do you work better with more flexibility?' },
  { id: 12, questionText: 'Would you rather work for a small startup where you wear many hats, or a large corporation with more defined roles?' },
  { id: 13, questionText: 'How important is job stability to you when considering career options?' },
  { id: 14, questionText: 'Do you enjoy problem-solving through hands-on experimentation, or do you prefer researching and analyzing before taking action?' },
  { id: 15, questionText: 'Would you consider relocating for a job if it offered a significant opportunity for growth?' },
  { id: 16, questionText: 'Do you thrive in roles that require constant communication, or do you prefer tasks that allow you to work independently?' },
  { id: 17, questionText: 'Are you comfortable with taking on roles that require a high degree of risk, or do you prefer more predictable and secure positions?' },
  { id: 18, questionText: 'Do you value the opportunity to travel for work, or would you rather have a role that keeps you closer to home?' },
  { id: 19, questionText: 'How important is mentorship and professional development when choosing a job?' },
  { id: 20, questionText: 'Do you prefer working on projects that have a clear end date, or do you enjoy ongoing, long-term responsibilities?' },
];

export function Dquestions2({page, setPage, setQuestions, setGlobalAnswers}:
  {page: string, setPage: (page: string)=>void, setQuestions: (questions:{id:number, questionText:string}[])=>void, setGlobalAnswers:(answers: {[key:number]:string})=>void}): React.JSX.Element {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswerClick = (id: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
  };

  const goBackToPreviousPage = () => {
    setQuestions(detailedQuestions2);
    setGlobalAnswers(answers);
    setPage('dquestions'); // Update the state to navigate back to the first page
  };

  const goToResults = () => {
    setQuestions(detailedQuestions2);
    setGlobalAnswers(answers);
    setPage('results'); // Update the state to navigate to the results page
  };

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
      {/* Previous Page button */}
      <button onClick={goBackToPreviousPage}>Previous Page</button> {/* Navigate back to the first page */}

      {/* See Results button */}
      <button onClick={goToResults}>See Results</button> {/* Navigate to the results page */}
    </div>
  );
};

