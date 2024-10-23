import React, { useState } from 'react';

interface Question {
  id: number;
  questionText: string;
}

export const questions: Question[] = [
  { id: 1, questionText: 'Do you enjoy working with technology or using computers?' },
  { id: 2, questionText: 'Are you interested in creative tasks like designing, writing, or creating things?' },
  { id: 3, questionText: 'Do you prefer working with people more than working alone?' },
  { id: 4, questionText: 'Do you prefer a structured routine over flexibility in your daily tasks?' },
  { id: 5, questionText: 'Is job stability and security more important to you than personal passion?' },
  { id: 6, questionText: 'Do you enjoy solving complex problems or puzzles?' },
  { id: 7, questionText: 'Would you be comfortable with a career that requires frequent travel or relocation?' },
];


export function Bquestions({setPage, setQuestions, setGlobalAnswers}: 
  {setPage: (page: string) => void, setQuestions: (questions: {id:number, questionText: string}[]) => void, setGlobalAnswers: (answers: {[key: number]: string}) => void}): React.JSX.Element {
  

  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswerClick = (id: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
  };

  const getButtonStyle = (questionId: number, answer: string) => {
    if (answers[questionId] === answer) {
      return { backgroundColor: 'blue', color: 'white' }; // Change background to blue if clicked
    }
    return {}; // Default style
  };

  const getResults = () => {

    // This can be where results are processed or API interaction can take place
    setQuestions(questions);
    setGlobalAnswers(answers);
    console.log('User answers:', answers);
    setPage('results');
    // Example: You can integrate GPT or further process the answers here

  };

  // Calculate progress
  const answeredQuestions = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="basic-question-page">
      <h1>Basic Career Questions</h1>

      {/* Progress bar */}
      <div style={{ width: '100%', backgroundColor: '#e0e0e0', height: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: 'green',
            height: '100%',
            borderRadius: '10px',
          }}
        ></div>
      </div>

      {/* Display progress in text */}
      <p>{answeredQuestions}/{totalQuestions} questions answered</p>

      <div className="question-list">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <p>{q.questionText}</p>
            <button style={getButtonStyle(q.id, 'Yes')} onClick={() => handleAnswerClick(q.id, 'Yes')}>
              YES
            </button>
            <button style={getButtonStyle(q.id, 'IDK')} onClick={() => handleAnswerClick(q.id, 'IDK')}>
              IDK
            </button>
            <button style={getButtonStyle(q.id, 'No')} onClick={() => handleAnswerClick(q.id, 'No')}>
              NO
            </button>
          </div>
        ))}
      </div>

      {/* Notification when all questions are answered */}
      {answeredQuestions === totalQuestions && <p>All questions completed! You can now submit or proceed.</p>}

      <button onClick={getResults} disabled={answeredQuestions !== totalQuestions}>
        Get Answer
      </button>
      <button onClick={() => setPage('home')}>Go Back to Home</button>
      <button onClick={() => setPage('dquestions')} disabled={answeredQuestions !== totalQuestions}>
        Next Page
      </button>
    </div>
  );
}

export default Bquestions;
