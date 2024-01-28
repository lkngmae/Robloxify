import React, { Component, useEffect } from 'react'
import axios from "axios";
import '../App.css'
import './Form.css'
import { useNavigate } from 'react-router-dom';
import  { Button } from './Button';

import Typewriter from "typewriter-effect";

/*import Map from '../Map';*/

const baseURL = "https://us-west1-aiplatform.googleapis.com/v1/projects/1035964768729/locations/us-west1/endpoints/4984701935220162560:predict";

const config = {
  headers: { Authorization: process.env.REACT_APP_ACCESS_TOKEN }//need to put env variable inside of netlify
}
console.log(process.env.REACT_APP_ACCESS_TOKEN)

export default function Form({response, setResponse}) {
  const [description, setDescription] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const genres = ["All Genres", "Adventure", "Fighting", "RPG", "Town and City", "Horror", "Building", "FPS", "Military", 
                "Naval", "Sports", "Comedy", "Sci-Fi"]
  const navigate = useNavigate();    
  
  const handleSubmit = (data) => {
    console.log(`
      Genre: ${genre}
      Description: ${description}
    `);
    const userData = {
      "instances": [
        {"prompt": `Generate a catchy title for the game Roblox based on the following description and genre: Genre: ${genre} Description: ${description}.`}
      ]
    }

    console.log(data);
    axios
      .post(
        baseURL,
        userData,
        config
      )
      .then((response) => {
        setResponse(response);
        console.log(response.data.predictions[0].content)
        navigate('/results-page', { state: {genreState:`${genre}`}}); //genrestate to be sent to results
      });
      
    };

  return (
    <div className = 'form-container' id="particles-js"> 
      
      <form onSubmit={handleSubmit}>
        <div className='typing-text'>
          <Typewriter
            // options={{
            //   strings: ['Tell Us About\nYour Game'],
            //   autoStart: true,
            // }}
            onInit={(typewriter) => {
              typewriter.typeString('Tell Us About<br/>Your Game')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .stop()
                .start();
            }}
          />
        </div>
  
        <label>
            Genre
            <select
            name="genre"
            value={genre}
            onChange={e => setGenre(e.target.value)}
            required>
            {genres.map(genre => (
                <option key={genre}>{genre}</option>
            ))}
            </select>
        </label>
      
      
        <label>
            Description
            <input
            name="description"
            type="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required />
        </label>
    


        <Button 
          onClick={handleSubmit}>
          Submit
        </Button>

      </form>
    </div>
  );
}
