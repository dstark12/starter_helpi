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
  const [aboutYou, setAboutYou] = useState<string>("");

  function GetSuggestions() {
    setSuggestions("Awaiting response...");
    setAboutYou("");
    
    const allAnswers = [...utils_answers_to_list(ba), ...utils_answers_to_list(da), ...utils_answers_to_list(da2)];
    const allQuestions = [...utils_questions_to_list(bq), ...utils_questions_to_list(dq), ...utils_questions_to_list(dq2)];

    GetResponse(apikey, GeneratePromptWithQuestions(allQuestions, allAnswers), (careers, about) => {
      const [firstCareer, ...rest] = careers.split('|');
      setMainCareer(firstCareer);
      setSuggestions(careers);
      setAboutYou(about);
      setShowResults(true);
    });
  }

  return (
    <div className="results-container">
      <header className="header">
        <h1>Career Quiz Results - About You</h1>
      </header>

      <main className="main-content">
        {!showResults && (
          <section className="career-section">
            <h2>Click Below to See Results!</h2>
            <Button onClick={GetSuggestions}>Get Recommendations from Answers</Button>
          </section>
        )}

        {showResults && (
          <>
            <section className="about-you-section">
              <p>{aboutYou.split(': ')[1] || aboutYou}</p>
            </section>

            <section className="career-section main-career">
              <h2>Your Top Career: <span>{mainCareer.split(': ')[1] || mainCareer}</span></h2>
              <p>Based on your quiz results, a <strong>{mainCareer.split(': ')[1] || mainCareer}</strong> seems to be the best fit for you!</p>
            </section>

            <section className="alternatives-section">
              <h3>Even More Career Options:</h3>
              <ul>
                {suggestions.split('|').slice(1).map((career, index) => (
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
