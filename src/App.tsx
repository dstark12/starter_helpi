/*
import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { Home } from './home';
import { Bquestions } from './bquestions';
import { Dquestions } from './dquestions';


//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  const [page, setPage] = useState<string>("home");

  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <Button onClick={()=>{setPage("home")}}>Home</Button>
          <Button onClick={()=>{setPage("bquestions")}}>Basic Questions</Button>
          <Button onClick={()=>{setPage("dquestions")}}>Detailed Questions</Button>
        </span>
        {page === "home"? <Home/> : null}
        {page === "bquestions"? <Bquestions/>: null}
        {page === "dquestions"? <Dquestions/>: null}
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

*/
import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { Home } from './home';
import { Bquestions } from './bquestions';
import { Dquestions } from './dquestions';
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
        {page === "home" ? <Home /> : null}
        {page === "bquestions" ? <Bquestions /> : null}
        {page === "dquestions" ? <Dquestions /> : null}
        {page === "results" ? <Results /> : null} {/* Add Results Page */}
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

