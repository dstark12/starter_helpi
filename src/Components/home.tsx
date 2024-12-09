import React from 'react';
import { Button } from "react-bootstrap";
import { MobileView, BrowserView } from 'react-device-detect';
import '../Styles/home.css'; 
import logo from '../logo.png';

export function Home({ setPage }: { setPage: (page: string) => void }): React.JSX.Element {
    return (
        <div className="home-page">
        <div className="container">
            <header>
                <h1>Career Quest</h1>
                <img style={{width: "75%", aspectRatio: 1}} src={logo} alt="Logo" className="logo" />
            </header>
            <div className="button-container-wrapper">
                
                <div className="button-container">
                    <div className="left-button">
                        <BrowserView>
                        <Button className="quiz_button"
                            onClick={() => {setPage("bquestions"); window.scrollTo(0,0);}}
                            aria-label="Start Basic Questions Quiz"
                        >
                            Basic Questions
                        </Button>
                        <p>A quiz that gives the user questions with multiple choice response for a quicker, less accurate experience</p>
                        </BrowserView>
                        <MobileView>
                        <Button className="quiz_button"
                            onClick={() => {setPage("bquestions"); window.scrollTo(0,0);}}
                            aria-label="Start Basic Questions Quiz"
                        >
                            Basic
                        </Button>
                        <p>A quiz that gives the user questions with multiple choice response for a quicker, less accurate experience</p>
                        </MobileView>
                    </div>
                    <div className="right-button">
                        <BrowserView>
                        <Button className="quiz_button"
                            onClick={() => {setPage("dquestions"); window.scrollTo(0,0);}}
                            aria-label="Start Detailed Questions Quiz"
                        >
                            Detailed Questions
                        </Button>
                        <p>A quiz that gives the user questions they can answer with open-ended responses for a longer, accurate experience</p>
                        </BrowserView>
                        <MobileView>
                        <Button className="quiz_button"
                            onClick={() => {setPage("dquestions"); window.scrollTo(0,0);}}
                            aria-label="Start Detailed Questions Quiz"
                        >
                            Detailed
                        </Button>
                        <p>A quiz that gives the user questions they can answer with open-ended responses for a longer, accurate experience</p>
                        </MobileView>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
