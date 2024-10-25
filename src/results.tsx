import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import { GetResponse, utils_answers_to_list, utils_questions_to_list } from './chat';
import './results.css';


function GeneratePromptWithQuestions(questions: string[], answers: string[]): string{
  let pre_prompt = "Based on the answers to the following questions, provide some career suggestions.";
  let post_prompt = "Based on the previous questions and responses, provide three career suggestions, along with a short description of each and the reason why it would be a good suggestion. Your answer should be in the following format: Career 1: {suggested career}. {Description of career}. {Reason why career would appeal to user}.";
  let prompt = "";
  for (let i=0; i<answers.length; i+=1){
      prompt += `${questions[i]} ${answers[i]}. `;
  }
  prompt = pre_prompt + prompt + post_prompt;
  return prompt;
}

export function Results({apikey, bq, ba, dq, da, dq2, da2}: 
  {apikey: string, bq: {id: number, questionText: string}[], ba: {[key: number]: string}, dq: {id: number, questionText: string}[], da: {[key: number]: string}, dq2: {id: number, questionText: string}[], da2: {[key: number]: string}}): React.JSX.Element {

  // Example career data
  const mainCareer = "Software Engineer";
  //const alternativeCareers = ["Data Scientist", "Cybersecurity Analyst", "Web Developer"];
  const otherCareers = ["Database Architect", "Mobile App Developer", "Information Security Analyst"];
  const [suggestions, setSuggestions] = useState<string>("");
  const graphData = [
    { label: 'Software Engineer', score: 80, questions: 7 }, // 7 questions aligned with Software Engineer
    { label: 'Data Scientist', score: 65, questions: 5 },    // 5 questions aligned with Data Scientist
    { label: 'Cybersecurity Analyst', score: 50, questions: 4 } // 4 questions aligned with Cybersecurity Analyst
  ];

  function GetSuggestions(){

    setSuggestions("Awaiting response...");
    let all_q: string[] = [];
    let all_a: string[] = [];

    let ba_list = utils_answers_to_list(ba);
    let da_list = utils_answers_to_list(da);
    let da2_list = utils_answers_to_list(da2);

    let bq_list = utils_questions_to_list(bq);
    let dq_list = utils_questions_to_list(dq);
    let dq2_list = utils_questions_to_list(dq2);

    all_a = [...ba_list, ...da_list, ...da2_list]

    for (let i=0; i<ba_list.length; i+=1){
      all_q = [...all_q, bq_list[i]];
    }
    for (let i=0; i<da_list.length; i+=1){
      all_q = [...all_q, dq_list[i]];
    }
    for (let i=0; i<da2_list.length; i+=1){
      all_q = [...all_q, dq2_list[i]];
    }

    GetResponse(apikey, GeneratePromptWithQuestions(all_q, all_a), setSuggestions);
  }

  return (
    <div className="results-container">
      <header className="header">
        <h1>Career Quiz Results</h1>
      </header>

      <main className="main-content">
        {/* Main Career Section */}

        <section className="career-section">
          <h2>AI-Generated Results</h2>
          <Button onClick={GetSuggestions}>Get Recommendations from Answers</Button>
          <p>{suggestions}</p>

        </section>
        
        <section className="career-section">
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
