import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { GetResponse, utils_answers_to_list, utils_questions_to_list } from './chat';
import './results.css';

function GeneratePromptWithQuestions(questions: string[], answers: string[]): string {
  let pre_prompt = "Based on the answers to the following questions, provide some career suggestions.";
  let post_prompt = "Provide three career suggestions with a short description and why it suits the user, in this format: Career 1: {career}. {Description}. {Appeal}.";
  let prompt = "";
  for (let i = 0; i < answers.length; i += 1) {
    prompt += `${questions[i]} ${answers[i]}. `;
  }
  return pre_prompt + prompt + post_prompt;
}

export function Results({ apikey, bq, ba, dq, da, dq2, da2 }: 
  { apikey: string, bq: { id: number, questionText: string }[], ba: { [key: number]: string }, dq: { id: number, questionText: string }[], da: { [key: number]: string }, dq2: { id: number, questionText: string }[], da2: { [key: number]: string } }): React.JSX.Element {

  const [showResults, setShowResults] = useState(false);
  const [mainCareer, setMainCareer] = useState<string>("Software Engineer");
  const [suggestions, setSuggestions] = useState<string>("");

  const graphData = [
    { label: 'Software Engineer', score: 80, questions: 7, description: "A career based around developing, testing, and maintaining software applications." },
    { label: 'Data Scientist', score: 65, questions: 5, description: "A career focused on analyzing complex data to make data-driven decisions." },
    { label: 'Cybersecurity Analyst', score: 50, questions: 4, description: "A career dedicated to protecting systems and networks from cyber threats." }
  ];

  function GetSuggestions() {
    setSuggestions("Awaiting response...");
    const allAnswers = [...utils_answers_to_list(ba), ...utils_answers_to_list(da), ...utils_answers_to_list(da2)];
    const allQuestions = [...utils_questions_to_list(bq), ...utils_questions_to_list(dq), ...utils_questions_to_list(dq2)];

    GetResponse(apikey, GeneratePromptWithQuestions(allQuestions, allAnswers), (response) => {
      const [firstCareer, ...rest] = response.split('|');
      setMainCareer(firstCareer);
      setSuggestions(response);
      setShowResults(true);
    });
  }

  return (
    <div className="results-container">
      <header className="header">
        <h1>Career Quiz Results</h1>
      </header>

      <main className="main-content">
        {!showResults && (
          <section className="career-section">
            <h2>AI-Generated Results</h2>
            <Button onClick={GetSuggestions}>Get Recommendations from Answers</Button>
          </section>
        )}

        {showResults && (
          <>
            <section className="career-section main-career">
              <h2>Your Ideal Career: <span>{mainCareer.split(': ')[1] || mainCareer}</span></h2>
              <p>Based on your quiz results, a <strong>{mainCareer.split(': ')[1] || mainCareer}</strong> seems to be the best fit for you!</p>
            </section>

            <section className="detailed-graphs-section">
              <h3>Top 3 Careers And Why:</h3>
              {graphData.map((data, index) => (
                <div key={index}>
                  <div className="career-detail">
                    <p>{data.questions} of your answers indicated interest in {data.label}.</p>
                    <div className="detail-graph">
                      <div
                        className="detail-bar"
                        style={{ width: `${data.questions * 15}%` }}
                      >
                        <span className="detail-bar-label">{data.questions} questions</span>
                      </div>
                    </div>
                  </div>
                  <p className="career-description">{data.description}</p> {/* Move description outside the grey box */}
                </div>
              ))}
            </section>

            <section className="alternatives-section">
              <h3>Even More Career Options:</h3>
              <ul>
                {["Database Architect", "Mobile App Developer", "Information Security Analyst"].map((career, index) => (
                  <li key={index}>{career}</li>
                ))}
              </ul>
            </section>
          </>
        )}
      </main>
      
      <footer className="footer">
        <p>Career Quiz © 2024</p>
      </footer>
    </div>
  );
}

export default Results;
