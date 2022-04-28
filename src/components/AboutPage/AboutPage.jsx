import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="profileContainer">
      <div>
        <h1>Technologies Used:</h1>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Redux-Saga</li>
          <li>Node</li>
          <li>Express</li>
          <li>Material UI</li>
          <li>Google Fit API and Login</li>
        </ul>
      <h1>Next..</h1>
      <p>Challenge Mode</p>
      </div>
    </div>
  );
}

export default AboutPage;
