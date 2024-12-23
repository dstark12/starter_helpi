import React from 'react';
import '../Styles/bquestions.css';
import '../Styles/App.css';
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


export function Bquestions({setPage, setQuestions, GlobalAnswers, setGlobalAnswers}: 
  {setPage: (page: string) => void, setQuestions: (questions: {id:number, questionText: string}[]) => void, GlobalAnswers: {[key: number]: string}, setGlobalAnswers: (answers: {[key: number]: string}) => void}): React.JSX.Element {
  
  const [answers, setAnswers] = [GlobalAnswers, setGlobalAnswers];

  const handleAnswerClick = (id: number, answer: string) => {
    setAnswers({
      ...answers,
      [id]: answer,
    });
  };

  const getButtonStyle = (questionId: number, answer: string) => {
    if (answers[questionId] === answer) {
      return { backgroundColor: "var(--question-button-color-selected)", color: 'var(--question-button-text-color-selected)' };
    }
    return { }; 
  };

  const getResults = () => {
    setQuestions(questions);
    setGlobalAnswers(answers);
    console.log('User answers:', answers);
    setPage('results');
    window.scrollTo(0,0);
  };

  const answeredQuestions = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const progress = (answeredQuestions / totalQuestions) * 100;


  return (
    <div className="basic-question-page">
      <h1>Basic Career Questions</h1>
      <p>This quiz helps you explore your career interests by asking a series of multiple-choice questions about your preferences and working style. You will be presented with questions covering topics like technology, creativity, collaboration, and work-life balance. By selecting your answers, you'll gain insights into potential career paths that align with your strengths and preferences. Simply choose from 'Yes', 'No', or 'I Don't Know' for each question, and see how your responses shape your career profile!</p>
      <div style={{ width: '100%', transition: 'all 0.3s ease;', backgroundColor: 'var(--progress-bar-background)', height: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <div
          role="progressbar"
          style={{
            width: `${progress}%`,
            backgroundColor: 'var(--progress-bar-color)',
            height: '100%',
            borderRadius: '10px',
          }}
        ></div>
      </div>

      <p>{answeredQuestions}/{totalQuestions} questions answered</p>

      <button style={{margin: "0 0 25px"}} onClick={()=>{setAnswers({})}}>Reset Answers</button>

      <div className="question-list">
        {questions.map((q) => (
          <div key={q.id} className="bquestion-item">
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

      {answeredQuestions === totalQuestions && <p>All questions completed! You can now submit or proceed.</p>}

      <button onClick={getResults} disabled={answeredQuestions !== totalQuestions}>
        Get Answer
      </button>
      <button onClick={() => {setPage('home'); window.scrollTo(0,0);}}>Go Back to Home</button>
      <button onClick={() => {setPage('dquestions'); window.scrollTo(0,0);}} disabled={answeredQuestions !== totalQuestions}>
        Next Page
      </button>
    </div>
  );
}

export default Bquestions;
