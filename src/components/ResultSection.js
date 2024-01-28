import React from 'react';
import '../App.css';
import './ResultSection.css'
import { Button } from './Button';


function ResultSection({response, setResponse}) {
  //get request
    return (
      <div className='result-container'>
          <p>Your Title is:</p>
          <h1>{response.data.predictions[0].content}</h1>
          <Button link="/form-page">Another one!</Button>
      </div>
      
    );
}

export default ResultSection;