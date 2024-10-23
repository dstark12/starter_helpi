import React from 'react';
import { Button } from "react-bootstrap";



export function Home({setPage}: {setPage: (page: string) => void}): React.JSX.Element {


    return (
        <div>
            <header>
                <h1>Super Fun Career Quiz</h1>
                <div>
                <p>A quiz that gives the user questions with multiple choice response for a quicker, less accurate experience</p>
                    <Button onClick={() => setPage("bquestions")}>Basic Questions</Button>
                    <p>A quiz that gives the user questions they can answer with open ended responses for a longer, accurate experience</p>
                    <Button onClick={() => setPage("dquestions")}>Detailed Questions</Button>
                </div>
            </header>
        </div>
    );
};
