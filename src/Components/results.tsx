import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { GetResponse, utils_answers_to_list, utils_questions_to_list } from './chat';
import '../Styles/results.css';

function GeneratePromptWithQuestions(questions: string[], answers: string[]): string {
  let pre_prompt = "Based on the answers to the following questions, provide some career suggestions.";
  let post_prompt = "Based on the previous questions and responses, provide three career suggestions, along with a short description of each and the reason why it would be a good suggestion. Your answer should be in the following format: Career 1: {suggested career}. {Description of career}. {Reason why career would appeal to user}.";
  let prompt = "";
  for (let i = 0; i < answers.length; i += 1) {
    prompt += `${questions[i]} ${answers[i]}. `;
  }
  prompt = pre_prompt + prompt + post_prompt;
  return prompt;
}

export function Results({ apikey, bq, ba, dq, da, dq2, da2, bfunc, dfunc, dfunc2 }: 
  { apikey: string, bq: { id: number, questionText: string }[], ba: { [key: number]: string }, dq: { id: number, questionText: string }[], da: { [key: number]: string }, dq2: { id: number, questionText: string }[], da2: { [key: number]: string }, bfunc: (answers: { [key: number]: string }) => void, dfunc: (answers: { [key: number]: string }) => void, dfunc2: (answers: { [key: number]: string }) => void }): React.JSX.Element {

  const [suggestions, setSuggestions] = useState<string>("");
  const [buttonVisible, setButtonVisible] = useState<boolean>(true);
  const [headerText, setHeaderText] = useState<string>("Career Quiz Results");

  function GetSuggestions() {
    setSuggestions("Awaiting response...");
    setButtonVisible(false);
    setHeaderText("Career Quiz Results");

    let all_q: string[] = [];
    let all_a: string[] = [];

    let ba_list = utils_answers_to_list(ba);
    let da_list = utils_answers_to_list(da);
    let da2_list = utils_answers_to_list(da2);

    let bq_list = utils_questions_to_list(bq);
    let dq_list = utils_questions_to_list(dq);
    let dq2_list = utils_questions_to_list(dq2);

    all_a = [...ba_list, ...da_list, ...da2_list];

    for (let i = 0; i < ba_list.length; i += 1) {
      all_q = [...all_q, bq_list[i]];
    }
    for (let i = 0; i < da_list.length; i += 1) {
      all_q = [...all_q, dq_list[i]];
    }
    for (let i = 0; i < da2_list.length; i += 1) {
      all_q = [...all_q, dq2_list[i]];
    }

    GetResponse(apikey, GeneratePromptWithQuestions(all_q, all_a), (careers) => {
      setSuggestions(careers);
    });
  }

  return (
    <div className="results-container">
        <h1>{headerText}</h1>

      <main className="main-content">
        <section className="career-section">
          <h2>AI-Generated Results</h2>
          {buttonVisible && (
            <Button 
              onClick={GetSuggestions}
              disabled={!apikey}
            >
              Get Recommendations from Answers
            </Button>
          )}
          {suggestions && (
            <>
              <p>{suggestions.split(`|`)[0]}</p>
              <p>{suggestions.split(`|`)[1]}</p>
              <p>{suggestions.split(`|`)[2]}</p>
            </>
          )}
        </section>

        {suggestions && (
          <>
          </>
        )}
      </main>
    </div>
  );
};

export default Results;
