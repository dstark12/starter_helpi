import React, { useState } from 'react';
import '../Styles/App.css';
import { Button, Form } from 'react-bootstrap';
import { Home } from './home';
import { Bquestions } from './bquestions';
import { Dquestions } from './dquestions';
import { Dquestions2 } from './dquestions2';
import { Results } from './results'; // Add Results import
import { ColorTheme, light_theme, dark_theme } from './Themes';

let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData);
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function set_theme(theme: ColorTheme){

  document.documentElement.style.setProperty("--quiz-button-color", theme.quiz_button_color );
  document.documentElement.style.setProperty("--quiz-button-color-hover", theme.quiz_button_color_hover );
  document.documentElement.style.setProperty("--quiz-button-disabled", theme.quiz_button_disabled );

  document.documentElement.style.setProperty("--progress-bar-color", theme.progress_bar_color );
  document.documentElement.style.setProperty("--progress-bar-background", theme.progress_bar_background );

  document.documentElement.style.setProperty("--question-button-color", theme.question_button_color );
  document.documentElement.style.setProperty("--question-button-color-hover", theme.question_button_color_hover );
  document.documentElement.style.setProperty("--question-button-color-selected", theme.question_button_color_selected );
  document.documentElement.style.setProperty("--question-button-text-color", theme.question_button_text_color );
  document.documentElement.style.setProperty("--question-button-text-color-hover", theme.question_button_text_color_hover );
  document.documentElement.style.setProperty("--question-button-text-color-selected", theme.question_button_text_color_selected );

  document.documentElement.style.setProperty("--question-input-background", theme.question_input_background );
  document.documentElement.style.setProperty("--question-input-text", theme.question_input_text );
  document.documentElement.style.setProperty("--question-input-text-placeholder", theme.question_input_text_placeholder );
  document.documentElement.style.setProperty("--question-input-border", theme.question_input_border );
  document.documentElement.style.setProperty("--question-input-border-focus", theme.question_input_border_focus );

  document.documentElement.style.setProperty("--question-wrapper-background", theme.question_wrapper_background );
  document.documentElement.style.setProperty("--question-wrapper-header-text", theme.question_wrapper_header_text );
  document.documentElement.style.setProperty("--question-wrapper-text", theme.question_wrapper_text );

  document.documentElement.style.setProperty("--question-item-background", theme.question_item_background );
  document.documentElement.style.setProperty("--question-item-border", theme.question_item_border );
  document.documentElement.style.setProperty("--question-item-text", theme.question_item_text );

  document.documentElement.style.setProperty("--header-background-color", theme.header_background_color );

  document.documentElement.style.setProperty("--menu-button-color", theme.menu_button_color );
  document.documentElement.style.setProperty("--menu-button-color-hover", theme.menu_button_color_hover );
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
  const [themeIdx, setThemeIdx] = useState<number>(0);

  let themes = [light_theme, dark_theme];

  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload();
  }

  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  function toggleTheme(){
    let new_idx = (themeIdx + 1)%themes.length;
    setThemeIdx(new_idx);
    set_theme(themes[new_idx]);
  }

  return (
    <div className="App">
      <header className="App-header">
      <Button style={{position: "absolute", top: 0, right: 0, margin: '20px'}}onClick={toggleTheme}>Toggle Theme</Button>
        <span>
          <Button onClick={() => setPage("home")}>Home</Button>
          <Button onClick={() => setPage("bquestions")}>Basic Questions</Button>
          <Button onClick={() => setPage("dquestions")}>Detailed Questions</Button>
          <Button onClick={() => setPage("results")}>Results</Button> {/* Add Results Button */}
        </span>
        {page === "home" ? <Home setPage={setPage}/> : null}
        {page === "bquestions" ? <Bquestions setPage={setPage} setQuestions={setBq} GlobalAnswers={banswers} setGlobalAnswers={setBanswers}/> : null}
        {page === "dquestions" ? <Dquestions page={page} setPage={setPage} setQuestions={setDq} GlobalAnswers={danswers} setGlobalAnswers={setDanswers}/> : null}
        {page === "dquestions2" ? <Dquestions2 page={page} setPage={setPage} setQuestions={setDq2} GlobalAnswers={danswers2} setGlobalAnswers={setDanswers2}/> : null}
        {page === "results" ? <Results apikey={key} bq={bq} ba={banswers} dq={dq} da={danswers} dq2={dq2} da2={danswers2} bfunc={setBanswers} dfunc={setDanswers} dfunc2={setDanswers2}/> : null} {/* Add Results Page */}


        <div className="api-key">
          
          <Form>
          <Form.Label style={{color: "var(--question-wrapper-header-text"}}>API Key:</Form.Label>
          <div className="api-key-wrapper">
          <Form.Control className="api-key-input" type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
          <br></br>
          <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
          </div>
          </Form>
          
        </div>

      </header>
      
    </div>
  );
}

export default App;

