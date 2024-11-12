import React from 'react';
import { Button } from 'react-bootstrap';
import '../Styles/dquestions.css';

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


export function Dquestions({ page, setPage, setQuestions, GlobalAnswers, setGlobalAnswers }:
 { page: string, setPage: (page: string) => void, setQuestions: (questions: DetailedQuestion[]) => void, GlobalAnswers: {[key: number]: string}, setGlobalAnswers: (answers: { [key: number]: string }) => void }): React.JSX.Element {
 //const [answers, setAnswers] = useState<{ [key: number]: string }>({});
 const [answers, setAnswers] = [GlobalAnswers, setGlobalAnswers];


 const handleAnswerChange = (id: number, answer: string) => {
  /*
   setAnswers((prevAnswers) => ({
     ...prevAnswers,
     [id]: answer,
   }));
   */
  setAnswers({...answers, [id]: answer});
 };
 const answeredQuestions = detailedQuestions.filter((q) => answers[q.id]?.trim()).length;
 const totalQuestions = detailedQuestions.length;
 const progress = (answeredQuestions / totalQuestions) * 100;

 // Check if all questions are answered
 const allQuestionsAnswered = detailedQuestions.every((q) => answers[q.id]?.trim());


 const getNextPage = () => {
   setQuestions(detailedQuestions);
   setGlobalAnswers(answers);
   setPage('dquestions2');
 };


 return (
   <div className="detailed-question-page">
     <h1>Detailed Career Questions</h1>
     <p>This isn't your typical multiple-choice quiz! You'll be asked a series of open-ended, detailed questions to encourage thoughtful, personalized responses. Each question includes a textbox input, so you can write freely and fully express your ideas, goals, and experiences.</p>
 {/* Progress Bar */}
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
    {/*Reset Button*/}
    <Button onClick={()=>{setAnswers({})}}>Reset Answers</Button>

     <div className="question-list">
       {detailedQuestions.map((q, index) => (
         <div key={q.id} className="question-item">
           <p>{index + 1}. {q.questionText}</p>
           <input
             type="text"
             placeholder="Enter your answer here"
             value={answers[q.id] || ''}
             onChange={(e) => handleAnswerChange(q.id, e.target.value)}
           />
         </div>
       ))}
     </div>
     {allQuestionsAnswered && <p>All questions completed! You can now go to next page!.</p>}
     {/* Button is disabled if not all questions are answered */}
     <button onClick={getNextPage} disabled={!allQuestionsAnswered}>
       Go To Next Page
     </button>
   </div>
 );
}
