import React from 'react';
import '../App.css';
import './ResultSection.css'


function ResultSection({response, setResponse}) {
  //get request
    return (
      <div className='result-container'>
          <h1>{response.data.predictions[0].content}</h1>
      </div>
      
    );
}

export default ResultSection;