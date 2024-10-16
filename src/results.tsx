/*
import React, { useState } from 'react';
import './results.css';

const Results = () => {
  // Defining Example career data
  const mainCareer = "Software Engineer";
  const alternativeCareers = ["Data Scientist", "Cybersecurity Analyst", "Web Developer"];
  const graphData = [
    { label: 'Software Engineer', score: 80 },
    { label: 'Data Scientist', score: 65 },
    { label: 'Cybersecurity Analyst', score: 50 }
  ];

  return (
    <div className="results-container">
      <header className="header">
        <h1>Career Quiz Results</h1>
      </header>

      <main className="main-content">
        <section className="career-section">
          <h2>Your Ideal Career: <span>{mainCareer}</span></h2>
          <p>Based on your quiz results, a <strong>{mainCareer}</strong> seems to be the best fit for you!</p>
        </section>

        <section className="graph-section">
          <h3>Quiz Score Breakdown</h3>
          <div className="graph">
            {graphData.map((data, index) => (
              <div key={index} className="bar-container">
                <div
                  className="bar"
                  style={{ height: `${data.score}%` }}
                  title={`${data.label}: ${data.score}%`}
                >
                  <span className="bar-label">{data.score}%</span>
                </div>
                <p className="bar-title">{data.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alternative careers section }
        <section className="alternatives-section">
          <h3>Alternative Career Options:</h3>
          <ul>
            {alternativeCareers.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </section>
      </main>

    
      <footer className="footer">
        <p>Career Quiz © 2024</p>
      </footer>
    </div>
  );
};

export default Results;

*/

import React from 'react';
import './results.css';

export const Results = () => {
  // Example career data
  const mainCareer = "Software Engineer";
  const alternativeCareers = ["Data Scientist", "Cybersecurity Analyst", "Web Developer"];
  const graphData = [
    { label: 'Software Engineer', score: 80, questions: 7 }, // 7 questions aligned with Software Engineer
    { label: 'Data Scientist', score: 65, questions: 5 },    // 5 questions aligned with Data Scientist
    { label: 'Cybersecurity Analyst', score: 50, questions: 4 } // 4 questions aligned with Cybersecurity Analyst
  ];

  return (
    <div className="results-container">
      <header className="header">
        <h1>Career Quiz Results</h1>
      </header>

      <main className="main-content">
        {/* Main Career Section */}
        <section className="career-section">
          <h2>Your Ideal Career: <span>{mainCareer}</span></h2>
          <p>Based on your quiz results, a <strong>{mainCareer}</strong> seems to be the best fit for you!</p>
        </section>

        {/* Quiz Score Breakdown Section */}
        <section className="graph-section">
          <h3>Quiz Score Breakdown</h3>
          <div className="graph">
            {graphData.map((data, index) => (
              <div key={index} className="bar-container">
                <div
                  className="bar"
                  style={{ height: `${data.score}%` }}
                  title={`${data.label}: ${data.score}%`}
                >
                  <span className="bar-label">{data.score}%</span>
                </div>
                <p className="bar-title">{data.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Graphs for Each Career */}
        <section className="detailed-graphs-section">
          <h3>Why These Careers Were Chosen:</h3>
          {graphData.map((data, index) => (
            <div key={index} className="career-detail">
              <h4>{data.label}</h4>
              <p>{data.questions} of your answers indicated interest in {data.label}.</p>
              <div className="detail-graph">
                <div
                  className="detail-bar"
                  style={{ width: `${data.questions * 15}%` }} // Adjust bar width to better visualize number of questions
                >
                  <span className="detail-bar-label">{data.questions} questions</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Alternative Careers Section */}
        <section className="alternatives-section">
          <h3> 
            co
            Alternative Career Options:</h3>
          <ul>
            {alternativeCareers.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Career Quiz © 2024</p>
      </footer>
    </div>
  );
};

export default Results;
