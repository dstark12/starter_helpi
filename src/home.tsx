import React, { useState } from 'react';
import { bQuestions } from './bquestions';
import { dQuestions } from './dquestions';


export function Home() : React.JSX.Element {
    return <div>
        <header>
            <button
            onClick={bQuestions}>
            </button>
            <button
            onClick={dQuestions}>
            </button>
        </header>
        <header>
            Super Fun Career Quiz
        </header>
    </div>
};

