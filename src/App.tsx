import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { Home } from './home';
import { Bquestions } from './bquestions';
import { Dquestions } from './dquestions';
import { Dquestions2 } from './dquestions2';
import { Results } from './results'; // Add Results import

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData);
  const [page, setPage] = useState<string>("home");
  const [bq, setBq] = useState<{id: number, questionText: string}[]>([]);
  const [dq, setDq] = useState<{id: number, questionText: string}[]>([]);
  const [dq2, setDq2] = useState<{id: number, questionText: string}[]>([]);
  const [banswers, setBanswers] = useState<{[key: number]: string}>([]);
  const [danswers, setDanswers] = useState<{[key: number]: string}>([]);
  const [danswers2, setDanswers2] = useState<{[key: number]: string}>([]);

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <span>
          <Button onClick={() => setPage("home")}>Home</Button>
          <Button onClick={() => setPage("bquestions")}>Basic Questions</Button>
          <Button onClick={() => setPage("dquestions")}>Detailed Questions</Button>
          <Button onClick={() => setPage("results")}>Results</Button> {/* Add Results Button */}
        </span>
        {page === "home" ? <Home setPage={setPage}/> : null}
        {page === "bquestions" ? <Bquestions setPage={setPage} setQuestions={setBq} setGlobalAnswers={setBanswers}/> : null}
        {page === "dquestions" ? <Dquestions page={page} setPage={setPage} setQuestions={setDq} setGlobalAnswers={setDanswers}/> : null}
        {page === "dquestions2" ? <Dquestions2 page={page} setPage={setPage} setQuestions={setDq2} setGlobalAnswers={setDanswers2}/> : null}
        {page === "results" ? <Results bq={bq} ba={banswers} dq={dq} da={danswers} dq2={dq2} da2={danswers2}/> : null} {/* Add Results Page */}
      </header>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default App;

