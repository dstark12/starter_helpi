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


//Function to detect if page is being rendered on a mobile device, so that a different layout that is more mobile-friendly can be shown
function isMobile(): boolean {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
  return check;
};


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
      {isMobile()? <span style={{margin: "30px"}}> </span>: null}
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

