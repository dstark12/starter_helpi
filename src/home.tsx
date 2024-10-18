import React from 'react';
import { Button } from "react-bootstrap";



export function Home({setPage}: {setPage: (page: string) => void}): React.JSX.Element {


    return (
        <div>
            <header>
                <h1>Super Fun Career Quiz</h1>
                <div>
                    <Button onClick={() => setPage("bquestions")}>Basic Questions</Button>
                    <Button onClick={() => setPage("dquestions")}>Detailed Questions</Button>
                </div>
            </header>
            <main>
            <p>Welcome to the Super Fun Career Quiz! Please select a quiz type.</p>  
            </main>
        </div>
    );
};
