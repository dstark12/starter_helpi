import React from 'react';
import { Button } from 'react-bootstrap';
import '../Styles/dquestions.css';

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


interface Dquestions2Props {
 page: string;
 setPage: (page: string) => void;
 setQuestions: (questions: DetailedQuestion[]) => void;
 GlobalAnswers: { [key: number]: string };
 setGlobalAnswers: (answers: { [key: number]: string }) => void;
}


export function Dquestions2({ page, setPage, setQuestions, GlobalAnswers, setGlobalAnswers }: Dquestions2Props): React.JSX.Element {
 //const [answers, setAnswers] = useState<{ [key: number]: string }>({});
 const [answers, setAnswers] = [GlobalAnswers, setGlobalAnswers];


 const handleAnswerChange = (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
   /*setAnswers((prevAnswers) => ({
     ...prevAnswers,
     [id]: e.target.value,
   }));*/
   setAnswers({...answers, [id]: e.target.value});
 };
 const answeredQuestions = detailedQuestions2.filter((q) => answers[q.id]?.trim()).length;
 const totalQuestions = detailedQuestions2.length;
 const progress = (answeredQuestions / totalQuestions) * 100;

 // Check if all questions are answered
 const allQuestionsAnswered = detailedQuestions2.every((q) => answers[q.id]?.trim());


 const goBackToPreviousPage = () => {
   setQuestions(detailedQuestions2);
   setGlobalAnswers(answers);
   setPage('dquestions');
 };


 const goToResults = () => {
   setQuestions(detailedQuestions2);
   setGlobalAnswers(answers);
   setPage('results');
 };


 return (
   <div className="detailed-question-page">
     <h1>Detailed Career Questions - Page 2</h1>
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
    <button style={{margin: "0 0 25px"}} onClick={()=>{setAnswers({})}}>Reset Answers</button>

     <div className="question-list">
       {detailedQuestions2.map((q, index) => (
         <div key={q.id} className="question-item">
           <p>{index + 11}. {q.questionText}</p>
           <input
             type="text"
             placeholder="Enter your answer here"
             value={answers[q.id] || ''}
             onChange={handleAnswerChange(q.id)}
           />
         </div>
       ))}
     </div>
     {allQuestionsAnswered && <p>All questions completed! You can now see your results!.</p>}
     <button onClick={goBackToPreviousPage}>Previous Page</button>
     <button onClick={goToResults} disabled={!allQuestionsAnswered}>See Results</button>
   </div>
 );
};
