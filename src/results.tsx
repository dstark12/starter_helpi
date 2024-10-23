import React from 'react';
import {Button} from 'react-bootstrap';
import { utils_answers_to_list, utils_questions_to_list } from './chat';
import './results.css';

/*
function PromptWithQuestions(questions: string[]){
  let pre_prompt = "Based on the answers to the following questions, provide some career suggestions.";
  let post_prompt = "Based on the previous questions and responses, provide three career suggestions, along with a short description of each and the reason why it would be a good suggestion. Your answer should be in the following format: Career 1: {suggested career}. {Description of career}. {Reason why career would appeal to user}.";

}
*/
export function Results({bq, ba, dq, da, dq2, da2}: 
  {bq: {id: number, questionText: string}[], ba: {[key: number]: string}, dq: {id: number, questionText: string}[], da: {[key: number]: string}, dq2: {id: number, questionText: string}[], da2: {[key: number]: string}}): React.JSX.Element {

  // Example career data
  const mainCareer = "Software Engineer";
  //const alternativeCareers = ["Data Scientist", "Cybersecurity Analyst", "Web Developer"];
  const otherCareers = ["Database Architect", "Mobile App Developer", "Information Security Analyst"];
  const graphData = [
    { label: 'Software Engineer', score: 80, questions: 7 }, // 7 questions aligned with Software Engineer
    { label: 'Data Scientist', score: 65, questions: 5 },    // 5 questions aligned with Data Scientist
    { label: 'Cybersecurity Analyst', score: 50, questions: 4 } // 4 questions aligned with Cybersecurity Analyst
  ];

  function log_results(){
    console.log(utils_questions_to_list(bq));
    console.log(utils_answers_to_list(ba));
  }

  return (
    <div className="results-container">
      <header className="header">
        <h1>Career Quiz Results</h1>
      </header>

      <main className="main-content">
        {/* Main Career Section */}
        
        <section className="career-section">
          <Button onClick={log_results}>Log Quiz Results</Button>
          <h2>Your Ideal Career: <span>{mainCareer}</span></h2>
          <p>Based on your quiz results, a <strong>{mainCareer}</strong> seems to be the best fit for you!</p>
        </section>

        {/* Detailed Graphs for Each Career */}
        <section className="detailed-graphs-section">
          <h3>Top 3 Careers And Why: </h3>
          {graphData.map((data, index) => (
            <div key={index} className="career-detail">
              <p>{data.questions} of your answers indicated interest in {data.label}.</p>
              <div className="detail-graph">
                <div
                  className="detail-bar"
                  style={{ width: `${data.questions * 15}%` }} // Adjust bar width to better visualize number of questions
                >
                  <span className="detail-bar-label">{data.questions} questions</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* other Careers Section */}
        <section className="alternatives-section">
          <h3>Even More Career Options:</h3>
          <ul>
            {otherCareers.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Career Quiz © 2024</p>
      </footer>
    </div>
  );
};

// Add default export
export default Results;
