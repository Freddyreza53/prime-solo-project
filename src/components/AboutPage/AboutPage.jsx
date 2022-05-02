import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="pageContainer">
      <div className="profileContainer">
        <h1>Technologies Used:</h1>
          <p>React</p>
          <p>Redux</p>
          <p>Redux-Saga</p>
          <p>Node</p>
          <p>Express</p>
          <p>Material UI</p>
          <p>Google Fit API and Login</p>
        

        <h1>Next I Would Like to... </h1>
          <p>Challenge Mode</p>

        <h1>Thanks to... </h1>
          <p>My Family</p>
          <p>Butler Cohort</p>
          <p>Prime Digital Academy</p>
      </div>
    </div>
  );
}

export default AboutPage;
